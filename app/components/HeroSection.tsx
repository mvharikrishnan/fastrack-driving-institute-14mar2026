export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Radial orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F58220]/10 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#F58220]/5 blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#F58220 1px, transparent 1px), linear-gradient(90deg, #F58220 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#F58220" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>

        {/* Steering wheel watermark */}
        <svg className="absolute top-16 right-12 w-40 h-40 opacity-5 hidden lg:block" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#F58220" strokeWidth="4" />
          <circle cx="50" cy="50" r="10" stroke="#F58220" strokeWidth="4" />
          <line x1="50" y1="5" x2="50" y2="40" stroke="#F58220" strokeWidth="4" />
          <line x1="50" y1="60" x2="50" y2="95" stroke="#F58220" strokeWidth="4" />
          <line x1="5" y1="50" x2="40" y2="50" stroke="#F58220" strokeWidth="4" />
          <line x1="60" y1="50" x2="95" y2="50" stroke="#F58220" strokeWidth="4" />
        </svg>

        {/* Road lines bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1440 128" preserveAspectRatio="xMidYMax slice">
            <rect x="660" y="0" width="120" height="128" fill="#F58220" opacity="0.3" />
            <line x1="720" y1="0" x2="720" y2="128" stroke="#F58220" strokeWidth="3" strokeDasharray="24 16" />
            <line x1="0" y1="64" x2="660" y2="64" stroke="white" strokeWidth="2" strokeDasharray="40 20" opacity="0.5" />
            <line x1="780" y1="64" x2="1440" y2="64" stroke="white" strokeWidth="2" strokeDasharray="40 20" opacity="0.5" />
          </svg>
        </div>
      </div>

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

        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Professional driving training with certified instructors, modern dual-control
          vehicles, and a proven track record — right here in Ernakulam, Kerala.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#courses"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#F58220] text-black font-bold text-base hover:bg-[#FF9A3C] transition-all duration-200 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 orange-glow"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
