export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#f97316]/5 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-[#262626] bg-[#111111] text-xs text-[#737373]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Open to Opportunities
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.1] mb-6">
          I Build the Engines{" "}
          <span className="text-[#f97316]">Behind Products</span>{" "}
          People Rely On
        </h1>

        {/* Sub-headline */}
        <p className="opacity-0 animate-slide-up animate-delay-100 text-base sm:text-lg text-[#737373] max-w-2xl mx-auto leading-relaxed mb-10">
          Backend & DevOps engineer specializing in scalable systems for
          Fintech, EduTech, and Web3 products — from API design to cloud
          infrastructure on AWS and GCP.
        </p>

        {/* CTAs */}
        <div className="opacity-0 animate-fade-in animate-delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-md border border-[#262626] bg-[#111111] hover:border-[#404040] text-[#fafafa] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Tech pills */}
        <div className="opacity-0 animate-fade-in animate-delay-300 mt-16 flex flex-wrap justify-center gap-2">
          {["Golang", "Node.js", "Next.js", "AWS", "Google Cloud", "PostgreSQL", "Docker"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-[#262626] bg-[#111111] text-[#737373]"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-[10px] text-[#737373] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#737373] to-transparent" />
      </div>
    </section>
  );
}
