const skillGroups = [
  {
    label: "Backend",
    skills: ["Golang", "Node.js", "Express.js", "GraphQL", "gRPC", "REST API", "and more.."],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "and more.."],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS S3", "Google Cloud", "Docker", "CI/CD", "Nginx", "and more.."],
  },
  {
    label: "Data & Messaging",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "RabbitMQ", "Firebase", "and more.."],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-3">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight">
            What I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="p-6 rounded-xl border border-[#262626] bg-[#111111] hover:border-[#404040] transition-colors duration-200"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-4">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-[#737373] hover:text-[#fafafa] transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f97316] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
