const experiences = [
  {
    role: "Sr. Software Engineer",
    company: "Web3 Company",
    period: "2025 — Present",
    bullets: [
      "Built staking ledger system in Go handling high-precision reward calculations with zero balance discrepancy across 100k+ users.",
      "Designed dual API layer (gRPC + REST) enabling mobile and internal services to share one backend without divergence.",
      "Integrated RabbitMQ event pipeline for async reconciliation, reducing race conditions in concurrent trade processing.",
    ],
  },
  {
    role: "Sr. Software Engineer",
    company: "Kara Digital",
    period: "2023 — 2025",
    bullets: [
      "Developed real-time data transfer layer for IoT fitness device signals using WebSocket + Redis pub/sub.",
      "Implemented calorie calculation engine with configurable workout formulas for 15+ exercise types.",
      "Shipped React Native mobile app and React CMS serving worldwide users across iOS and Android.",
    ],
  },
  {
    role: "Sr. Software Engineer",
    company: "Enkripsi Teknologi Handal (Nobi)",
    period: "2022 — 2023",
    bullets: [
      "Built staking ledger system in Go handling high-precision reward calculations with zero balance discrepancy across 100k+ users.",
      "Designed dual API layer (gRPC + REST) enabling mobile and internal services to share one backend without divergence.",
      "Integrated RabbitMQ event pipeline for async reconciliation, reducing race conditions in concurrent trade processing.",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Bursa Akselerasi Indonesia",
    period: "2021 — 2022",
    bullets: [
      "Built core P2P lending transaction engine with deterministic money-movement logic — zero miscalculation incidents in production.",
      "Integrated OJK-compliant third-party reporting pipeline with async reconciliation across external fintech APIs.",
      "Delivered React-based backoffice dashboard enabling ops team to manage loan disbursements without engineering support.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Terampil Online Pratama",
    period: "2020 — 2021",
    bullets: [
      "Architected Node.js/GraphQL backend for a Udemy-style platform serving 10k+ concurrent learners.",
      "Implemented S3-based video access control to prevent content piracy without degrading streaming UX.",
      "Tuned EC2 infrastructure to maintain sub-200ms API response times under peak load.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight">
            Where I&apos;ve Worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[7.5rem] top-0 bottom-0 w-px bg-[#262626]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:grid md:grid-cols-[120px_1fr] md:gap-10 group">
                {/* Period */}
                <div className="md:text-right mb-3 md:mb-0 pt-0.5">
                  <span className="text-xs text-[#737373] font-medium mr-4">{exp.period}</span>
                </div>

                {/* Dot */}
                <div className="hidden md:block absolute left-[7.5rem] top-1.5 w-3 h-3 rounded-full border-2 border-[#f97316] bg-[#0a0a0a] -translate-x-1.5 group-hover:scale-125 transition-transform duration-200" />

                {/* Content */}
                <div className="pl-0 md:pl-6">
                  <div className="mb-3">
                    <h3 className="text-base font-semibold text-[#fafafa]">{exp.role}</h3>
                    <p className="text-sm text-[#f97316]">{exp.company}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#404040]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
