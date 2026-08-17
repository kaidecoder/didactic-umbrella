export default function TopicGrid() {
  const topics = [
    {
      title: "Algebra & Equations",
      description:
        "Master variables, linear functions, quadratics, and graphing calculations.",
      audience: "Students",
      resourceCount: "24 Resources",
      // We pass the full, complete strings separately so Tailwind can read them safely
      borderClass: "border-t-red-700",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
    },
    {
      title: "Geometry Essentials",
      description:
        "Explore proof structures, area, perimeter, volume, and coordinate proofs.",
      audience: "Students",
      resourceCount: "18 Resources",
      borderClass: "border-t-red-700",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
    },
    {
      title: "Calculus & Limits",
      description:
        "Dive into continuous rate changes, derivatives, and integral theory.",
      audience: "Students",
      resourceCount: "12 Resources",
      borderClass: "border-t-red-700",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
    },
    {
      title: "Homework Helper Guides",
      description:
        "Step-by-step curriculum walkthroughs to support your child at home.",
      audience: "Parents",
      resourceCount: "15 Guides",
      borderClass: "border-t-red-700",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
    },
    {
      title: "Common Core Maps",
      description:
        "Understand state standards and targeted math learning pathways.",
      audience: "Parents",
      resourceCount: "8 Guides",
      borderClass: "border-t-red-700",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
    },
    {
      title: "Lesson Plan Blueprints",
      description:
        "Downloadable syllabi, classroom discussion prompts, and activity ideas.",
      audience: "Teachers",
      resourceCount: "30 Packages",
      borderClass: "border-t-red-700",
      textClass: "text-red-700",
      bgClass: "bg-red-50",
    },
  ]

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore Math Resources
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl">
            Select a learning topic or toolkit built specially for your target
            educational objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              // Render the unbroken classes straight onto the container elements
              className={`bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 ${topic.borderClass} p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div>
                {/* Badge Tag - Dynamically applying clean text and background styles */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${topic.textClass} ${topic.bgClass}`}
                >
                  {topic.audience}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {topic.resourceCount}
                </span>
                {/* Dynamically styling the inline text hyperlink to matching colors */}
                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-semibold ${topic.textClass} hover:opacity-80 transition-opacity`}
                >
                  View Material
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
