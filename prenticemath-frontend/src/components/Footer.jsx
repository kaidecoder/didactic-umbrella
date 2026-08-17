export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "For Students",
      links: ["Algebra Practice", "Geometry Visualizer", "Calculus Helpers", "Interactive Calculators"]
    },
    {
      title: "For Parents",
      links: ["Homework Survival Guide", "Curriculum Mapping", "Tutoring Resources", "Parent Forums"]
    },
    {
      title: "For Teachers",
      links: ["Lesson Blueprints", "Printable Worksheets", "Classroom Games", "Assessment Tools"]
    }
  ];

  return (
    // Changed bg-white to bg-zinc-950 and border-slate-200 to border-zinc-800
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 pb-12 border-b border-zinc-800">

          <div className="lg:col-span-2">
            <span className="text-2xl font-black tracking-tight text-red-600">
              prentice<span className="text-zinc-100">math</span>
            </span>
            <p className="mt-4 text-sm text-zinc-400 max-w-sm leading-relaxed">
              Empowering students, supporting parents, and equipping teachers with clear, high-quality, and accessible mathematics resources.
            </p>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Changed text-slate-900 to text-zinc-200 */}
              <h4 className="text-sm font-semibold text-zinc-200 tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    {/* Changed hover color text to red-400 to match crimson dashboard accents */}
                    <a href="#" className="text-sm text-zinc-400 hover:text-red-400 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} prenticemath. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
