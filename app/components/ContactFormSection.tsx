"use client";

import { useState } from "react";

const courses = [
  "Beginner Driving Course",
  "Advanced Driving Training",
  "License Test Preparation",
];

const timeSlots = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Evening (4pm - 8pm)",
  "Weekend Only",
];

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "", course: "", preferredTime: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]/30 transition-all";

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F58220]/5 rounded-full blur-[80px] translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#F58220] font-semibold text-xs uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#F58220]" />
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Ready to Start Your
              <span className="text-gradient block">Driving Journey?</span>
            </h2>
            <p className="text-white/40 mb-10 leading-relaxed">
              Fill out the form and our team will get back to you to confirm your
              enrollment and schedule your first lesson. We are open{" "}
              <span className="text-[#F58220] font-semibold">24 hours, 7 days a week</span>{" "}
              — so we work around your schedule.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 90482 91000",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@fastrackdriving.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Elenthikkara, Puthenvelikara, Ernakulam - 683594, Kerala",
                  href: "https://maps.app.goo.gl/4568cvTKP4Kvxtyi8",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Working Hours",
                  value: "Open 24 Hours · Monday to Sunday",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-medium mb-0.5">{item.label}</p>
                    {"href" in item ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="text-white/70 text-sm hover:text-[#F58220] underline underline-offset-2 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/70 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-3">
              <span className="text-sm text-white/30">Follow us:</span>
              {[
                {
                  name: "Instagram",
                  href: "#",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  href: "#",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  href: "https://wa.me/919048291000",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a key={s.name} href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:border-[#F58220] hover:text-[#F58220] flex items-center justify-center transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-dark rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/40">We will contact you soon.</p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-lg border border-[#F58220] text-[#F58220] text-sm font-semibold hover:bg-[#F58220] hover:text-black transition-all">
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">Enroll Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Full Name <span className="text-[#F58220]">*</span></label>
                      <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Phone <span className="text-[#F58220]">*</span></label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 90482 91000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Email <span className="text-[#F58220]">*</span></label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Course <span className="text-[#F58220]">*</span></label>
                      <select name="course" required value={form.course} onChange={handleChange} className={inputClass}>
                        <option value="">Select course</option>
                        {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Preferred Time</label>
                      <select name="preferredTime" value={form.preferredTime} onChange={handleChange} className={inputClass}>
                        <option value="">Select slot</option>
                        {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Any specific requirements..." className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#F58220] text-black font-bold text-base hover:bg-[#FF9A3C] active:scale-[0.98] transition-all shadow-lg hover:shadow-orange-500/30">
                    Enroll Now
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
