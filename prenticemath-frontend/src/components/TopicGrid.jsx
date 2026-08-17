export default function TopicGrid() {
  const topics = [
    {
      title: "Algebra & Equations",
      description: "Master variables, linear functions, quadratics, and graphing calculations.",
      audience: "Students",
      resourceCount: "24 Resources",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40" // Soft translucent dark crimson badge background
    },
    {
      title: "Geometry Essentials",
      description: "Explore proof structures, area, perimeter, volume, and coordinate proofs.",
      audience: "Students",
      resourceCount: "18 Resources",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40"
    },
    {
      title: "Calculus & Limits",
      description: "Dive into continuous rate changes, derivatives, and integral theory.",
      audience: "Students",
      resourceCount: "12 Resources",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40"
    },
    {
      title: "Homework Helper Guides",
      description: "Step-by-step curriculum walkthroughs to support your child at home.",
      audience: "Parents",
      resourceCount: "15 Guides",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40"
    },
    {
      title: "Common Core Maps",
      description: "Understand state standards and targeted math learning pathways.",
      audience: "Parents",
      resourceCount: "8 Guides",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40"
    },
    {
      title: "Lesson Plan Blueprints",
      description: "Downloadable syllabi, classroom discussion prompts, and activity ideas.",
      audience: "Teachers",
      resourceCount: "30 Packages",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40"
    }
  ];

  return (
    // Changed bg-slate-50 to bg-transparent to sit cleanly on your new zinc-900 background
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center md:text-left">
          {/* Changed text-slate-900 to text-zinc-100 */}
          <h2 className="text-3xl font-extrabold tracking-tight text-red-700 sm:text-4xl">
            Explore Math Resources
          </h2>
          {/* Changed text-slate-500 to text-zinc-400 */}
          <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
            Select a learning topic or toolkit built specially for your target educational objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              // Changed bg-white to an elegant bg-zinc-800/60 slate, border-slate-200 to border-zinc-800
              className={`bg-zinc-800/60 rounded-xl shadow-md border border-zinc-800 border-t-4 ${topic.borderClass} p-6 flex flex-col justify-between hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${topic.textClass} ${topic.bgClass}`}>
                  {topic.audience}
                </span>

                {/* Title set to crisp white */}
                <h3 className="mt-4 text-xl font-bold text-zinc-100">
                  {topic.title}
                </h3>

                {/* Description set to readable muted gray */}
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">
                  {topic.resourceCount}
                </span>
                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-semibold ${topic.textClass} hover:opacity-80 transition-opacity`}
                >
                  View Material
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
