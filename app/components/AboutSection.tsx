const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Expert Instructors",
    desc: "Certified, patient instructors with 10+ years of professional teaching experience.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safe Modern Vehicles",
    desc: "Well-maintained dual-control fleet equipped with the latest safety features.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "98% Pass Rate",
    desc: "Our students consistently achieve outstanding results in their RTO driving tests.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Open 24/7",
    desc: "Flexible scheduling every day of the week, round the clock — we fit your lifestyle.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F58220]/5 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#F58220] font-semibold text-xs uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#F58220]" />
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Ernakulam&apos;s Most Trusted
              <span className="text-gradient block">Driving Institute</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              Fastrack Driving Institute Puthenvelikara, located at Elenthikkara, Puthenvelikara,
              Ernakulam, is one of Kerala&apos;s most respected driving training institutions.
              We have been a trusted leader in driver skill development for years — empowering
              thousands of individuals to become safe, confident, and road-ready drivers.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Our state-of-the-art training facility and modern fleet of dual-control vehicles
              create the ideal learning environment. Whether you are a first-time learner, a
              professional upgrading your license, or preparing for your RTO driving test —
              our highly experienced team delivers personalised, high-quality training
              tailored to your pace and goals.
            </p>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F58220] text-black font-bold hover:bg-[#FF9A3C] transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Explore Our Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-dark rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-3 group-hover:bg-[#F58220] group-hover:text-black transition-all duration-200">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
