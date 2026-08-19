import { useState } from "react"

export default function TopicGrid() {
  // 1. Hook state to track the active audience filter
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Students", "Parents", "Teachers"]

  const topics = [
    {
      title: "Algebra & Equations",
      description:
        "Master variables, linear functions, quadratics, and graphing calculations using standard open curriculums.",
      audience: "Students",
      resourceCount: "2 Active Repos",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [
        {
          label: "STEM Algebra Equation Sheets",
          url: "https://github.com/tengjuilin/equation-sheets",
        },
        {
          label: "Linear & Quadratic Solver",
          url: "https://github.com",
        },
      ],
    },
    {
      title: "Geometry Essentials",
      description:
        "Explore proof structures, area, perimeter, volume, and coordinate plane transformations.",
      audience: "Students",
      resourceCount: "2 Modules",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [
        {
          label: "Undergraduate Math Reference Packets",
          url: "https://github.com",
        },
        {
          label: "Interactive Geometric Tools",
          url: "https://github.com/tamerUAE/excalimath",
        },
      ],
    },
    {
      title: "Calculus & Limits",
      description:
        "Dive into continuous rate changes, derivative limits, and integral theory foundations.",
      audience: "Students",
      resourceCount: "2 Calculus Units",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [
        { label: "Limits & Continuity", url: "https://githubusercontent.com" },
        {
          label: "The Derivative Concept",
          url: "https://githubusercontent.com",
        },
      ],
    },
    {
      title: "Homework Helper Guides",
      description:
        "Step-by-step curriculum walkthroughs to support structural child learning milestones at home.",
      audience: "Parents",
      resourceCount: "OSSU Pre-College Blueprint",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [{ label: "View Open Curriculum", url: "https://github.com" }],
    },
    {
      title: "Massachusetts State Standards",
      description:
        "Explore formal Pre-K through Grade 12 math frameworks, quick reference progress guides, and course sequences built by the MA DESE.",
      audience: "Teachers",
      resourceCount: "Official DESE Hub",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [
        { label: "MA Math Framework (Full PDF)", url: "https://mass.edu" },
        {
          label: "DESE Grade Reference Guides",
          url: "https://mass.edu?section=math-qrg",
        },
        { label: "MA Learning Standards Portal", url: "https://mass.edu" },
      ],
    },
    {
      title: "Common Core Maps",
      description:
        "Understand structural state standards mapping and targeted K-12 learning pathways.",
      audience: "Parents",
      resourceCount: "Searchable Dataset",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [
        { label: "Core Standards JSON Schema", url: "https://github.com" },
      ],
    },
    {
      title: "Lesson Plan Blueprints",
      description:
        "Downloadable interactive syllabi, math expression libraries, and classroom activity ideas.",
      audience: "Teachers",
      resourceCount: "Interactive Engines",
      borderClass: "border-t-red-600",
      textClass: "text-red-400",
      bgClass: "bg-red-950/40",
      materials: [
        { label: "Mathigon Textbooks Repo", url: "https://github.com" },
        { label: "CU Denver Stat OER Guides", url: "https://github.com" },
      ],
    },
  ]

  // 2. Filter topics list dynamically based on user selection
  const filteredTopics =
    activeFilter === "All"
      ? topics
      : topics.filter((topic) => topic.audience === activeFilter)

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-800/40">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              Explore Math Resources
            </h2>
            <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
              Select a learning topic or toolkit built specially for your target
              educational objectives.
            </p>
          </div>

          {/* 3. Filter Controls Container Layout */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-red-700 text-white border-red-600 shadow-sm"
                    : "bg-zinc-800/40 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic, index) => (
            <div
              key={index}
              className={`bg-zinc-800/60 rounded-xl shadow-md border border-zinc-800 border-t-4 ${topic.borderClass} p-6 flex flex-col justify-between hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${topic.textClass} ${topic.bgClass}`}
                >
                  {topic.audience}
                </span>

                <h3 className="mt-4 text-xl font-bold text-zinc-100">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {topic.description}
                </p>

                {/* Sub-Resource Links List Drawer */}
                <div className="mt-4 space-y-2">
                  {topic.materials.map((item, mIdx) => (
                    <a
                      key={mIdx}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-xs bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-red-400 p-2 rounded-lg transition-colors truncate"
                    >
                      🏛️ {item.label} ➔
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500">
                  {topic.resourceCount}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Fallback State Notification if needed */}
        {filteredTopics.length === 0 && (
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-xl">
            <p className="text-zinc-500 font-medium">
              No resources found matching this group.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
