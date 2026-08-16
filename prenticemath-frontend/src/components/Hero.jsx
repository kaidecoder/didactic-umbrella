import MathCalculator from "./MathCalculator";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden border-b border-slate-100">
      {/* Visual background decoration grid */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Making Math Accessible for <span className="text-blue-600">Everyone</span>
          </h1>
            <MathCalculator />
          {/* Subheading */}
          <p className="mt-4 text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Discover curations of lessons, homework keys, and high-quality resources built for student growth, parent support, and teacher efficiency.
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="sm:flex shadow-sm rounded-xl overflow-hidden border border-slate-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <div className="flex-grow flex items-center bg-white px-3 py-2">
                <svg className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search topics (e.g., Algebra, Geometry, Fractions...)"
                  className="w-full text-slate-900 placeholder-slate-400 text-sm outline-none bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 transition-colors duration-200 flex-shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          {/* Quick-Link Target Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Links:</span>
            <button className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-1.5 rounded-full transition-colors">
              Quadratic Equations
            </button>
            <button className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-1.5 rounded-full transition-colors">
              Common Core Guides
            </button>
            <button className="text-xs font-medium bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 px-3 py-1.5 rounded-full transition-colors">
              Printable Worksheets
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
