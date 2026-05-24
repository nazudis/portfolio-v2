const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "4", label: "Domains" },
];

const domains = ["Fintech", "EduTech", "Web3", "Enterprise"];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight mb-6">
              The person behind the code
            </h2>
            <div className="space-y-4 text-[#737373] text-base leading-relaxed">
              <p>
                I&apos;m a software engineer with a backend-first mindset. I
                spend most of my time designing APIs, wiring up cloud
                infrastructure, and making sure distributed systems behave
                themselves.
              </p>
              <p>
                I&apos;ve shipped products across Fintech, EduTech, Web3, and
                enterprise tools — usually the kind of systems where downtime
                isn&apos;t an option.
              </p>
              <p>
                I write Go for performance, Node when speed matters more than
                overhead, and reach for React/Next.js when the frontend
                can&apos;t wait for someone else.
              </p>
            </div>

            {/* Domain tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {domains.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 text-xs rounded-full border border-[#f97316]/30 bg-[#f97316]/8 text-[#f97316]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-[#262626] bg-[#111111] hover:border-[#404040] transition-colors duration-200"
              >
                <p className="text-4xl font-bold text-[#f97316] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-[#737373]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
