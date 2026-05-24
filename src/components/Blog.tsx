const posts = [
  {
    title: "6 Ways To Create Function In JavaScript",
    summary: "In JavaScript, functions aren’t just commands — they’re dynamic, flexible spells that can be cast in myriad ways. By mastering functions, you unlock boundless potential to create, manipulate, and transform data, making the magic of JavaScript come alive.",
    date: "Dec 7, 2024",
    href: "https://fauzanakmal.com/6-ways-to-create-function-in-javascript",
  },
  {
    title: "Is Deno Ready To Replace Node.js?",
    summary: "From TypeScript support to security, discover the key differences between Deno and Node.js and when to use each in real-world scenarios",
    date: "Nov 3, 2024",
    href: "https://fauzanakmal.com/is-deno-ready-to-replace-node-js",
  },
  {
    title: "Asynchronous Programming Paradigms in JavaScript",
    summary: "Asynchronous programming is a core aspect of building responsive, efficient JavaScript applications. The paradigms available — callbacks, promises, and async/await — each have their place.",
    date: "Oct 28, 2024",
    href: "https://fauzanakmal.com/asynchronous-programming-paradigms-in-javascript",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#f97316] mb-3">
            Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] tracking-tight">
            Things I Figured Out (and Wrote Down)
          </h2>
          <p className="mt-3 text-[#737373] text-base max-w-xl">
            Technical deep-dives, lessons from production, and the occasional strong opinion.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-start gap-4 p-6 rounded-xl border border-[#262626] bg-[#111111] hover:border-[#f97316]/40 hover:bg-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,115,22,0.06)]"
            >
              <span className="shrink-0 text-xs text-[#404040] font-medium pt-0.5 w-10">
                {post.date}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#fafafa] group-hover:text-[#f97316] transition-colors duration-200 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {post.summary}
                </p>
              </div>
              <svg
                className="shrink-0 mt-0.5 text-[#404040] group-hover:text-[#f97316] transition-colors duration-200 hidden sm:block"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://fauzanakmal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#f97316] transition-colors duration-200"
          >
            Read all posts on fauzanakmal.com
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
