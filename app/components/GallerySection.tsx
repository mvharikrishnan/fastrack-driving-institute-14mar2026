"use client";

import { useState, useEffect } from "react";

const galleryItems = [
  {
    id: 1,
    bg: "from-[#F58220] to-[#D96E15]",
    label: "Driving Lessons",
    image: "/fastrack-driving.png",
    icon: null,
  },
  {
    id: 2,
    bg: "from-[#1A1A1A] to-[#2A2A2A]",
    label: "Training Vehicles",
    icon: (
      <svg className="w-14 h-14 text-[#F58220]/60" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
        <circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/>
      </svg>
    ),
  },
  {
    id: 3,
    bg: "from-[#1A1A1A] to-[#111111]",
    label: "Students Practicing",
    icon: (
      <svg className="w-14 h-14 text-[#F58220]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    bg: "from-[#222222] to-[#1A1A1A]",
    label: "Instructor Guidance",
    icon: (
      <svg className="w-14 h-14 text-[#F58220]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    bg: "from-[#F58220]/20 to-[#1A1A1A]",
    label: "Road Practice",
    icon: (
      <svg className="w-14 h-14 text-[#F58220]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: 6,
    bg: "from-[#F58220] to-[#FF9A3C]",
    label: "License Success",
    icon: (
      <svg className="w-14 h-14 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

type GalleryItem = (typeof galleryItems)[number];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section id="gallery" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#F58220] font-semibold text-xs uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#F58220]" />
              Gallery
              <span className="w-6 h-px bg-[#F58220]" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Life at <span className="text-gradient">Fastrack</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              A glimpse into our training sessions, vehicles, and the journey of our
              students from first lesson to license.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className={`gallery-img relative overflow-hidden rounded-2xl cursor-pointer border border-white/5 hover:border-[#F58220]/40 transition-all duration-300 group ${
                  idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ minHeight: idx === 0 ? "300px" : "160px" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />

                {"image" in item && item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                )}

                {/* Hover overlay with zoom icon */}
                <div className="gallery-overlay absolute inset-0 bg-[#F58220]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zm-3-3v6m-3-3h6" />
                    </svg>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-[#F58220] text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            {"image" in lightbox && lightbox.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lightbox.image}
                alt={lightbox.label}
                className="w-full h-auto max-h-[80vh] object-contain bg-[#111]"
              />
            ) : (
              <div className={`flex items-center justify-center bg-gradient-to-br ${lightbox.bg} h-80`}>
                {lightbox.icon}
              </div>
            )}

            {/* Label bar */}
            <div className="bg-[#1A1A1A] px-6 py-4">
              <p className="text-white font-semibold text-lg">{lightbox.label}</p>
              <p className="text-white/40 text-sm">Fastrack Driving Institute</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
