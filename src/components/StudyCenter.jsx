import React, { useState } from 'react';

export default function StudyCenter() {
  const [activeLevel, setActiveLevel] = useState('kids');

  // GitHub Pages repo base path for your static assets
  const repoPath = '/prenticemath-frontend';

  // High school curated outbound resource links
  const highSchoolResources = [
    { title: "Algebra: Solving Quadratic Equations", url: "https://khanacademy.org" },
    { title: "Geometry: Pythagorean Theorem Practice", url: "https://khanacademy.org" },
    { title: "Pre-Calculus: Derivatives Introduction", url: "https://khanacademy.org" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl my-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-4 mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            📚 PrenticeMath Hub
          </h2>
          <p className="text-zinc-400 text-sm mt-1">Interactive modules tailored by educational tiers.</p>
        </div>

        {/* Toggle Switcher */}
        <div className="flex bg-zinc-950 p-1.5 rounded-xl border border-zinc-800">
          <button
            onClick={() => setActiveLevel('kids')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeLevel === 'kids' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            🧒 Early Learners (1-12)
          </button>
          <button
            onClick={() => setActiveLevel('advanced')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeLevel === 'advanced' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            🎓 Advanced Academy
          </button>
        </div>
      </div>

      {/* TIER 1: EARLY LEARNERS (NATIVE INTERACTIVE VIEW) */}
      {activeLevel === 'kids' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-zinc-950/40 p-4 border border-zinc-800 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">🔢 Multiplication Reference</h3>
            <p className="text-sm text-zinc-400 mb-4">Keep early students directly in-app using your local asset sheets.</p>

            <div className="w-full h-[600px] border border-zinc-800 rounded-lg overflow-hidden bg-white shadow-inner">
              <iframe
                src={`${repoPath}/prenticemath_timestables.pdf`}
                width="100%"
                height="100%"
                className="border-none"
                title="Times Tables Reference"
              />
            </div>
          </div>
        </div>
      )}

      {/* TIER 2: ADVANCED ACADEMY (OUTBOUND SMART LAUNCHPAD) */}
      {activeLevel === 'advanced' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
          {highSchoolResources.map((resource, index) => (
            <div key={index} className="flex flex-col justify-between p-5 bg-zinc-950/60 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all duration-200">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Khan Exercise Bundle</span>
                <h4 className="text-base font-medium mt-1 mb-4 text-zinc-100">{resource.title}</h4>
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Launch Module <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
