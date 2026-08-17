import { useState } from 'react';

export default function FormulaSheet() {
  const [activeCategory, setActiveCategory] = useState('all');

  const formulaCategories = [
    { id: 'all', name: '📚 All Formulas' },
    { id: 'algebra', name: '📐 Algebra' },
    { id: 'geometry', name: '🎯 Geometry' },
    { id: 'calculus', name: '📈 Calculus' }
  ];

  const formulas = [
    {
      title: "Quadratic Formula",
      equation: "x = (-b ± √(b² - 4ac)) / 2a",
      description: "Finds the roots of a quadratic equation: ax² + bx + c = 0.",
      category: "algebra"
    },
    {
      title: "Slope-Intercept Form",
      equation: "y = mx + b",
      description: "Defines a straight line where m is the slope and b is the y-intercept.",
      category: "algebra"
    },
    {
      title: "Pythagorean Theorem",
      equation: "a² + b² = c²",
      description: "Calculates the unknown side length of a right-angled triangle.",
      category: "geometry"
    },
    {
      title: "Area of a Circle",
      equation: "A = πr²",
      description: "Finds the total surface space inside a circle given its radius.",
      category: "geometry"
    },
    {
      title: "The Power Rule",
      equation: "d/dx(xⁿ) = n·xⁿ⁻¹",
      description: "A fast, foundational method to find the derivative of a power function.",
      category: "calculus"
    },
    {
      title: "Fundamental Theorem of Calculus",
      equation: "∫[a to b] f(x)dx = F(b) - F(a)",
      description: "Connects differentiation and integration using the antiderivative function.",
      category: "calculus"
    }
  ];

  // Filter formulas dynamically based on the active tab hook
  const filteredFormulas = activeCategory === 'all'
    ? formulas
    : formulas.filter(f => f.category === activeCategory);

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            Quick Formula Sheet
          </h2>
          <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
            A scannable reference guide of high-frequency equations for study review, lesson planning, and quick homework checks.
          </p>
        </div>

        {/* Dynamic Category Selector Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {formulaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-red-700 text-white border-red-600 shadow-sm'
                  : 'bg-zinc-800/40 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Formulas Grid Panel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFormulas.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800/40 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between hover:bg-zinc-800/80 transition-all duration-200"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {item.category}
                  </span>
                </div>

                {/* Equation Core Highlight Box - Tinted Dark Crimson Accent Background */}
                <div className="my-4 p-3 bg-red-950/20 border border-red-900/30 rounded-xl flex items-center justify-center min-h-[64px]">
                  <code className="text-lg font-mono font-bold text-red-400 tracking-wide text-center">
                    {item.equation}
                  </code>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
