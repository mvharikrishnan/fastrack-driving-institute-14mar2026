export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#111111]">
      {/* Orange gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F58220]/20 via-[#F58220]/10 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#F58220]/15 rounded-full blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F58220 1px, transparent 1px), linear-gradient(90deg, #F58220 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Steering wheel watermark */}
      <svg className="absolute right-16 top-1/2 -translate-y-1/2 w-64 h-64 opacity-5 hidden lg:block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="#F58220" strokeWidth="3" />
        <circle cx="50" cy="50" r="10" stroke="#F58220" strokeWidth="3" />
        <line x1="50" y1="5" x2="50" y2="40" stroke="#F58220" strokeWidth="3" />
        <line x1="50" y1="60" x2="50" y2="95" stroke="#F58220" strokeWidth="3" />
        <line x1="5" y1="50" x2="40" y2="50" stroke="#F58220" strokeWidth="3" />
        <line x1="60" y1="50" x2="95" y2="50" stroke="#F58220" strokeWidth="3" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-[#F58220] font-semibold text-xs uppercase tracking-widest mb-6">
          <span className="w-6 h-px bg-[#F58220]" />
          Get Started Today
          <span className="w-6 h-px bg-[#F58220]" />
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
          Start Your Driving Journey{" "}
          <span className="text-gradient">Today</span>
        </h2>
        <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of confident drivers who started their journey with Fastrack.
          Professional training, flexible schedules, and guaranteed results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#F58220] text-black font-bold text-base hover:bg-[#FF9A3C] transition-all duration-200 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5">
            Book Your First Lesson
          </a>
          <a href="tel:+919048291000"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-base border border-white/20 hover:border-[#F58220] hover:text-[#F58220] transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
          {["No Hidden Charges", "Free Consultation", "Certified Instructors", "Open 24/7"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#F58220]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
