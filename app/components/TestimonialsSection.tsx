"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Passed on First Attempt",
    avatar: "RS",
    stars: 5,
    text: "Great instructors! I passed my driving test on the first attempt. The trainers at Fastrack are very patient and knowledgeable. They made me feel confident on the road from day one.",
  },
  {
    name: "Priya Mehta",
    role: "Beginner Course Graduate",
    avatar: "PM",
    stars: 5,
    text: "I was very nervous about learning to drive but the instructors here made it so easy and comfortable. The structured lessons and modern vehicles really helped me build confidence quickly.",
  },
  {
    name: "Arun Kumar",
    role: "Advanced Training",
    avatar: "AK",
    stars: 5,
    text: "Excellent institute! The advanced driving course helped me become a much safer and more confident driver. I highly recommend Fastrack to anyone looking to improve their driving skills.",
  },
  {
    name: "Sneha Patel",
    role: "License Test Prep",
    avatar: "SP",
    stars: 5,
    text: "The license test preparation course was exactly what I needed. They know all the test routes and examiner expectations. Cleared my test in the first attempt with flying colors!",
  },
  {
    name: "Mohammed Ali",
    role: "Beginner Course",
    avatar: "MA",
    stars: 5,
    text: "Very professional driving school with well-maintained vehicles. The flexible scheduling made it easy for me to fit lessons around my work. Would definitely recommend to friends and family.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#F58220]" : "text-white/10"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => { setIsAutoPlaying(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setIsAutoPlaying(false); setCurrent((c) => (c + 1) % testimonials.length); };

  const indices = [current, (current + 1) % testimonials.length, (current + 2) % testimonials.length];

  return (
    <section id="testimonials" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F58220]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#F58220] font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#F58220]" />
            Testimonials
            <span className="w-6 h-px bg-[#F58220]" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Real stories from real students who achieved their driving goals with Fastrack.
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-10">
          {indices.map((idx) => {
            const t = testimonials[idx];
            return (
              <div key={`${idx}-${t.name}`} className="card-dark rounded-2xl p-6 flex flex-col">
                <Stars count={t.stars} />
                <p className="mt-4 text-white/50 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-[#F58220] text-black font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-10">
          <div className="card-dark rounded-2xl p-6">
            {(() => {
              const t = testimonials[current];
              return (
                <>
                  <Stars count={t.stars} />
                  <p className="mt-4 text-white/50 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-[#F58220] text-black font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/30 text-xs">{t.role}</p>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 text-white/50 hover:border-[#F58220] hover:text-[#F58220] transition-colors flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#F58220] w-6" : "bg-white/20 w-1.5 hover:bg-white/40"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 text-white/50 hover:border-[#F58220] hover:text-[#F58220] transition-colors flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
