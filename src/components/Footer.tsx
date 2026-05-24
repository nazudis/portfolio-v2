export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#404040]">
          © {new Date().getFullYear()} Fauzanakmal. Built with Next.js & Tailwind CSS.
        </p>
        <a
          href="#"
          className="text-xs text-[#404040] hover:text-[#f97316] transition-colors duration-200 cursor-pointer"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
