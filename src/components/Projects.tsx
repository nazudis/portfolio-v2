const projects = [
  {
    name: "terampil.com",
    category: "EduTech",
    tagline: "Building an e-learning platform is straightforward — until you have to make sure videos never buffer and content never leaks.",
    description:
      "Udemy-style learning platform with web and mobile apps. Built full backend with Node.js/Express and GraphQL, handled video delivery via AWS S3 with access control, and tuned EC2 infrastructure for smooth streaming under load.",
    stack: ["Node.js", "Next.js", "React Native", "AWS EC2", "S3", "PostgreSQL", "GraphQL"],
    href: "https://terampil.com",
  },
  {
    name: "indofund.id",
    category: "Fintech",
    tagline: "In fintech, a bug isn't just a bug — it's someone's money going somewhere it shouldn't.",
    description:
      "B2B peer-to-peer lending platform connecting lenders and borrowers. Built core transaction system with strict money-movement logic, and integrated third-party fintech providers for OJK regulatory reporting.",
    stack: ["Node.js", "MongoDB", "React", "Redis"],
    href: "https://indofund.id",
  },
  {
    name: "Nobi",
    category: "Web3 / Crypto",
    tagline: "When your app moves real money 24/7, \"close enough\" in your math is not an option.",
    description:
      "Crypto trading and staking platform. Built the staking ledger in Go with high-precision arithmetic, reconciling balances across async RabbitMQ events. Exposed both gRPC and REST APIs to serve mobile and internal services.",
    stack: ["Golang", "gRPC", "REST", "React Native", "MySQL", "Redis", "RabbitMQ"],
    href: "#",
  },
  {
    name: "Hygear",
    category: "Fitness / IoT",
    tagline: "Most fitness apps track your workouts. Hygear connects to the actual equipment you're using.",
    description:
      "Worldwide fitness super app bridging real gym hardware with mobile. Handled real-time device signals, calorie calculation logic, live data feeds via WebSocket, and a React backoffice for ops teams.",
    stack: ["Node.js", "React Native", "MongoDB", "React", "Redis"],
    href: "#",
  },
  {
    name: "Snap Together",
    category: "Social / Events",
    tagline: "Remember printing photos at events and handing them out? This is that — but instant, and everyone leaves with everything.",
    description:
      "Event photo-sharing app. Organizers invite guests into a shared space, attendees upload freely, and anyone pulls all photos with a single tap. Redis caching keeps gallery loads fast without hammering S3.",
    stack: ["React Native", "Node.js", "MongoDB", "Redis", "AWS S3"],
    href: "#",
  },
  {
    name: "Halotamu",
    category: "Enterprise / SaaS",
    tagline: "The visitor logbook at most offices is still a piece of paper. Halotamu fixes that.",
    description:
      "Digital check-in/check-out system for residential complexes, offices, and apartments. Guards log visitors, track entry/exit, and keep a searchable audit trail — all from a clean Next.js interface backed by Go.",
    stack: ["Golang", "Next.js", "PostgreSQL"],
    href: "#",
  },
];

const categoryColors: Record<string, string> = {
  "EduTech": "text-sky-400 bg-sky-400/10 border-sky-400/20",
  "Fintech": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Web3 / Crypto": "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "Fitness / IoT": "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "Social / Events": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "Enterprise / SaaS": "text-orange-400 bg-orange-400/10 border-orange-400/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight">
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-[#737373] text-base max-w-xl">
            A few projects that show how I think and what I ship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col p-6 rounded-xl border border-[#262626] bg-[#111111] hover:border-[#f97316]/40 hover:bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] cursor-pointer"
            >
              {/* Category badge */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[project.category] ?? "text-[#737373] bg-[#1a1a1a] border-[#262626]"}`}
                >
                  {project.category}
                </span>
                {project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="text-[#404040] hover:text-[#f97316] transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#fafafa] mb-3 group-hover:text-[#f97316] transition-colors duration-200">
                {project.name}
              </h3>

              {/* Tagline */}
              <p className="text-xs text-[#737373] italic leading-relaxed mb-3 border-l-2 border-[#262626] pl-3">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-[#737373] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] rounded border border-[#262626] bg-[#1a1a1a] text-[#404040] group-hover:border-[#404040] transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
