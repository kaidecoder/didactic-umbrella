export default function GameDirectory() {
  const gameCategories = [
    {
      title: "🕹️ Digital Apps & Video Games",
      description: "Immersive games that transform abstract formulas into visual puzzles.",
      items: [
        {
          name: "DragonBox Algebra",
          age: "Age 12+",
          concept: "Linear equations, fractional operations, and algebraic balancing.",
          tag: "App Store / Play Store"
        },
        {
          name: "Euclidea",
          age: "Age 10+",
          concept: "Euclidean plane geometry, angle construction, and bisectors.",
          tag: "Web Browser & Mobile"
        },
        {
          name: "Fluxian",
          age: "High School+",
          concept: "Calculus logic, continuous curves, and rates of change.",
          tag: "Free Browser Game"
        }
      ]
    },
    {
      title: "🎲 Strategy Tabletop Board Games",
      description: "Screen-free strategic games perfect for parents and classrooms.",
      items: [
        {
          name: "Prime Climb",
          age: "Age 10+",
          concept: "Prime factorization, multiplication, and fast arithmetic.",
          tag: "Physical Board Game"
        },
        {
          name: "Blokus",
          age: "Age 7+",
          concept: "Spatial reasoning, area coverage expansion, and matrix mapping.",
          tag: "Physical Board Game"
        },
        {
          name: "Liar's Dice / Can't Stop",
          age: "Age 12+",
          concept: "Probability calculations, risk assessment, and statistics.",
          tag: "Uses Standard Dice"
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-zinc-800/60">

      {/* Component Headline */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-zinc-100">
          🎯 Curated Math Game Library
        </h3>
        <p className="text-sm text-zinc-400 mt-1">
          Hand-picked external learning resources recommended for homes and classrooms.
        </p>
      </div>

      {/* Categories Layout */}
      <div className="space-y-10">
        {gameCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <div>
              <h4 className="text-base font-bold text-red-400">{category.title}</h4>
              <p className="text-xs text-zinc-500 mt-0.5">{category.description}</p>
            </div>

            {/* Games Grid inside Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((game, gameIdx) => (
                <div
                  key={gameIdx}
                  className="bg-zinc-800/20 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-700/50 transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-center gap-2">
                      <h5 className="font-bold text-zinc-100 text-sm">{game.name}</h5>
                      <span className="text-[10px] font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                        {game.age}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      <strong className="text-zinc-300">Teaches:</strong> {game.concept}
                    </p>
                  </div>

                  {/* Platform/Store Footer Tag */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/50 flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                      {game.tag}
                    </span>
                    <a href="#" className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors">
                      Learn More ➔
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
