"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    // ── Scene ────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d0d0d, 0.016);

    // ── Camera ───────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(58, W / H, 0.1, 300);
    camera.position.set(0, 2.8, 6);
    camera.lookAt(0, 0.8, -60);

    // ── Renderer ─────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x0d0d0d, 1);
    container.appendChild(renderer.domElement);

    // ── Road surface ─────────────────────────────────────
    const ROAD_W = 14;
    const ROAD_L = 400;

    const roadMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.95, metalness: 0.05 });
    const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, ROAD_L), roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0, -ROAD_L / 2 + 12);
    scene.add(road);

    // Ground beyond road
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.MeshStandardMaterial({ color: 0x080808, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.02, -180);
    scene.add(ground);

    // ── Road edge lines (solid white) ────────────────────
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd, emissive: 0xffffff, emissiveIntensity: 0.12,
    });
    const edgeGeo = new THREE.BoxGeometry(0.18, 0.02, ROAD_L);
    [-ROAD_W / 2 + 0.15, ROAD_W / 2 - 0.15].forEach((x) => {
      const e = new THREE.Mesh(edgeGeo, edgeMat.clone());
      e.position.set(x, 0.02, -ROAD_L / 2 + 12);
      scene.add(e);
    });

    // ── Lane dashes ──────────────────────────────────────
    const DASH_COUNT = 35;
    const DASH_SPACING = 10;
    const TOTAL_LOOP = DASH_COUNT * DASH_SPACING;

    const buildDashes = (xPos: number, color: number, emissiveInt: number) => {
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: emissiveInt,
      });
      const arr: THREE.Mesh[] = [];
      for (let i = 0; i < DASH_COUNT; i++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 2.8), mat);
        m.position.set(xPos, 0.02, -i * DASH_SPACING + 8);
        scene.add(m);
        arr.push(m);
      }
      return arr;
    };

    // Centre dashes → orange glow
    const centreDashes = buildDashes(0, 0xf58220, 0.8);
    // Inner lane dividers → dim white
    const leftDashes  = buildDashes(-ROAD_W / 6, 0xffffff, 0.18);
    const rightDashes = buildDashes( ROAD_W / 6, 0xffffff, 0.18);

    // ── Street lamp poles + glow orbs ────────────────────
    const poleMat  = new THREE.MeshStandardMaterial({ color: 0x2a2a2a });
    const glowMat  = new THREE.MeshStandardMaterial({
      color: 0xf58220, emissive: 0xf58220, emissiveIntensity: 3,
    });

    const LAMP_SPACING = 22;
    const LAMP_COUNT   = 18;
    const POLE_OFFSET  = ROAD_W / 2 + 1.2;

    for (let i = 0; i < LAMP_COUNT; i++) {
      const z = -i * LAMP_SPACING - 5;
      const pGeo = new THREE.CylinderGeometry(0.06, 0.09, 7, 7);
      const oGeo = new THREE.SphereGeometry(0.22, 8, 8);

      [-POLE_OFFSET, POLE_OFFSET].forEach((x) => {
        const pole = new THREE.Mesh(pGeo, poleMat.clone());
        pole.position.set(x, 3.5, z);
        scene.add(pole);

        const orb = new THREE.Mesh(oGeo, glowMat.clone());
        orb.position.set(x, 7.3, z);
        scene.add(orb);

        // Actual point light (every other lamp to save GPU)
        if (i % 2 === 0) {
          const pl = new THREE.PointLight(0xf58220, 1.5, 28, 2);
          pl.position.set(x, 7, z);
          scene.add(pl);
        }
      });
    }

    // ── Particles (dust / fireflies) ─────────────────────
    const P_COUNT = 600;
    const pPos    = new Float32Array(P_COUNT * 3);
    const pCol    = new Float32Array(P_COUNT * 3);

    for (let i = 0; i < P_COUNT; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 45;
      pPos[i * 3 + 1] = Math.random() * 9 + 0.3;
      pPos[i * 3 + 2] = -Math.random() * 200;

      const orange = Math.random() > 0.35;
      pCol[i * 3]     = orange ? 0.96 : 1;
      pCol[i * 3 + 1] = orange ? 0.51 : 0.9;
      pCol[i * 3 + 2] = orange ? 0.13 : 0.8;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color",    new THREE.BufferAttribute(pCol, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.07, vertexColors: true, transparent: true, opacity: 0.75,
    });
    const particleMesh = new THREE.Points(pGeo, pMat);
    scene.add(particleMesh);

    // ── Moving cars (silhouettes) ─────────────────────────
    const carMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const headlightMat = new THREE.MeshStandardMaterial({
      color: 0xfff0cc, emissive: 0xfff0cc, emissiveIntensity: 4,
    });
    const taillightMat = new THREE.MeshStandardMaterial({
      color: 0xff2200, emissive: 0xff2200, emissiveIntensity: 3,
    });

    const buildCar = (lane: number) => {
      const group = new THREE.Group();
      // Body
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 4), carMat);
      body.position.y = 0.55;
      group.add(body);
      // Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.6, 2.4), carMat);
      roof.position.set(0, 1.1, -0.2);
      group.add(roof);
      // Wheels
      const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 10);
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a });
      [[-0.9, 0, 1.4], [0.9, 0, 1.4], [-0.9, 0, -1.4], [0.9, 0, -1.4]].forEach(([x, y, z]) => {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.z = Math.PI / 2;
        w.position.set(x, y + 0.28, z);
        group.add(w);
      });
      // Headlights
      const hlGeo = new THREE.BoxGeometry(0.28, 0.15, 0.06);
      [-0.6, 0.6].forEach((x) => {
        const hl = new THREE.Mesh(hlGeo, headlightMat);
        hl.position.set(x, 0.6, 2.03);
        group.add(hl);
      });
      // Tail lights
      const tlGeo = new THREE.BoxGeometry(0.28, 0.15, 0.06);
      [-0.6, 0.6].forEach((x) => {
        const tl = new THREE.Mesh(tlGeo, taillightMat);
        tl.position.set(x, 0.6, -2.03);
        group.add(tl);
      });
      group.position.set(lane, 0, 0);
      return group;
    };

    // 3 cars on different lanes / z offsets
    const carData = [
      { lane: -3.5, z: -40, speed: 0.18 },
      { lane:  3.5, z: -80, speed: 0.14 },
      { lane: -3.5, z: -130, speed: 0.22 },
    ];
    const cars = carData.map(({ lane, z, speed }) => {
      const car = buildCar(lane);
      car.position.z = z;
      scene.add(car);
      return { mesh: car, speed };
    });

    // ── Lighting ─────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x111111, 2));

    // Headlights from "our" position (viewer's car)
    const makeHeadlight = (x: number) => {
      const sl = new THREE.SpotLight(0xffeedd, 4, 120, Math.PI / 11, 0.6, 1.2);
      sl.position.set(x, 2.2, 5);
      sl.target.position.set(x * 0.4, 0, -80);
      scene.add(sl);
      scene.add(sl.target);
    };
    makeHeadlight(-0.8);
    makeHeadlight( 0.8);

    // Distant horizon orange glow
    const horizonLight = new THREE.PointLight(0xf58220, 4, 100, 1.5);
    horizonLight.position.set(0, 4, -80);
    scene.add(horizonLight);

    // ── Animation loop ───────────────────────────────────
    let raf: number;
    let t = 0;
    const SPEED = 0.22;

    const moveDashes = (arr: THREE.Mesh[]) => {
      arr.forEach((d) => {
        d.position.z += SPEED;
        if (d.position.z > 12) d.position.z -= TOTAL_LOOP;
      });
    };

    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.016;

      // Road markings
      moveDashes(centreDashes);
      moveDashes(leftDashes);
      moveDashes(rightDashes);

      // Particles drift forward
      const pos = particleMesh.geometry.attributes.position;
      const arr = pos.array as Float32Array;
      for (let i = 0; i < P_COUNT; i++) {
        arr[i * 3 + 2] += 0.07;
        if (arr[i * 3 + 2] > 10) arr[i * 3 + 2] -= 200;
      }
      pos.needsUpdate = true;

      // Cars move toward viewer
      cars.forEach(({ mesh, speed }) => {
        mesh.position.z += speed;
        if (mesh.position.z > 12) mesh.position.z -= 180;
      });

      // Subtle camera sway — like sitting in a car
      camera.position.y = 2.8 + Math.sin(t * 0.28) * 0.08;
      camera.position.x = Math.sin(t * 0.18) * 0.12;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ───────────────────────────────────────────
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
