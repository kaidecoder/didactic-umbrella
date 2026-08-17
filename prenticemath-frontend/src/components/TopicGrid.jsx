export default function TopicGrid() {
  const topics = [
    {
      title: "Algebra & Equations",
      description:
        "Master variables, linear functions, quadratics, and graphing calculations.",
      audience: "Students",
      resourceCount: "24 Resources",
      color: "border-t-blue-500 text-blue-600 bg-blue-50",
    },
    {
      title: "Geometry Essentials",
      description:
        "Explore proof structures, area, perimeter, volume, and coordinate proofs.",
      audience: "Students",
      resourceCount: "18 Resources",
      color: "border-t-indigo-500 text-indigo-600 bg-indigo-50",
    },
    {
      title: "Calculus & Limits",
      description:
        "Dive into continuous rate changes, derivatives, and integral theory.",
      audience: "Students",
      resourceCount: "12 Resources",
      color: "border-t-violet-500 text-violet-600 bg-violet-50",
    },
    {
      title: "Homework Helper Guides",
      description:
        "Step-by-step curriculum walkthroughs to support your child at home.",
      audience: "Parents",
      resourceCount: "15 Guides",
      color: "border-t-emerald-500 text-emerald-600 bg-emerald-50",
    },
    {
      title: "Common Core Maps",
      description:
        "Understand state standards and targeted math learning pathways.",
      audience: "Parents",
      resourceCount: "8 Guides",
      color: "border-t-teal-500 text-teal-600 bg-teal-50",
    },
    {
      title: "Lesson Plan Blueprints",
      description:
        "Downloadable syllabi, classroom discussion prompts, and activity ideas.",
      audience: "Teachers",
      resourceCount: "30 Packages",
      color: "border-t-amber-500 text-amber-600 bg-amber-50",
    },
  ]

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore Math Resources
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl">
            Select a learning topic or toolkit built specially for your target
            educational objectives.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 ${topic.color.split(" ")[0]} p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div>
                {/* Badge Tag */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${topic.color.split(" ").slice(1).join(" ")}`}
                >
                  {topic.audience}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-600">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Card Footer Link and Meta Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {topic.resourceCount}
                </span>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
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
