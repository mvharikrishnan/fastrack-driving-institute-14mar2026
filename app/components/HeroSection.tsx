"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Three.js driving animation */}
      <HeroCanvas />

      {/* Dark gradient overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/10 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] animate-pulse" />
          Puthenvelikara&apos;s #1 Driving Institute
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
          Learn Driving with{" "}
          <span className="text-gradient">Confidence</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Professional driving training with certified instructors, modern dual-control
          vehicles, and a proven track record — right here in Ernakulam, Kerala.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#courses"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#F58220] text-black font-bold text-base hover:bg-[#FF9A3C] transition-all duration-200 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            Start Learning
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-base border border-white/20 hover:border-[#F58220] hover:text-[#F58220] transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { value: "5000+", label: "Students Trained" },
            { value: "98%",   label: "Pass Rate" },
            { value: "10+",   label: "Years Experience" },
            { value: "15+",   label: "Training Vehicles" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-4 border border-white/10 hover:border-[#F58220]/40 transition-colors"
            >
              <div className="text-2xl font-bold text-[#F58220]">{stat.value}</div>
              <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
