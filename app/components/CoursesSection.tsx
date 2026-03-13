const courses = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    badge: "Most Popular",
    title: "Beginner Driving Course",
    description:
      "Perfect for first-time drivers. Learn vehicle controls, traffic rules, road signs, and basic driving techniques from scratch in a safe, supportive environment.",
    highlights: ["Vehicle controls & safety", "Traffic rules & road signs", "Parking & maneuvering"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: "Advanced",
    title: "Advanced Driving Training",
    description:
      "For drivers who want to sharpen their skills. Master highway driving, defensive techniques, overtaking, and handling challenging road and weather conditions.",
    highlights: ["Highway & expressway driving", "Defensive driving tactics", "Night & wet weather driving"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    badge: "Test Prep",
    title: "License Test Preparation",
    description:
      "Comprehensive exam-focused preparation. Practice exact test routes, procedures, and common examiner checkpoints to pass your driving test on the first attempt.",
    highlights: ["Mock test simulations", "Examiner tips & tricks", "Test route practice"],
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F58220]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#F58220] font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#F58220]" />
            Our Programs
            <span className="w-6 h-px bg-[#F58220]" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Courses Designed for{" "}
            <span className="text-gradient">Every Driver</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Whether you&apos;re just starting out or preparing for your RTO test, we have
            the right program to get you on the road with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="card-dark rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Icon + Badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center group-hover:bg-[#F58220] group-hover:text-black transition-all duration-200">
                  {course.icon}
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                  {course.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{course.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-1">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-[#F58220] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-5 border-t border-white/5 flex justify-center">
                <a
                  href="#contact"
                  className="px-8 py-2.5 rounded-lg border-2 border-[#F58220] text-[#F58220] bg-transparent text-sm font-bold group-hover:bg-[#F58220] group-hover:text-black transition-all duration-200"
                >
                  Enroll
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
