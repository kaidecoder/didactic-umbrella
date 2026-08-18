import { useState } from "react"

export default function PlayableGames() {
  const openSourceGames = [
    {
      name: "SineRider Track Builder",
      concept:
        "Type graphing equations to build sled tracks through coordinate plane checkpoints.",
      repo: "hackclub/sinerider",
      playUrl: "https://hackclub.dev",
      age: "High School+",
    },
    {
      name: "Math Sprint Arena",
      concept:
        "A neon, fast-paced cognitive simulator to sharpen mental arithmetic speeds.",
      repo: "Amey-Thakur/MATH-SPRINT-GAME",
      playUrl: "https://math-sprint-arena.vercel.app/",
      age: "All Ages",
    },
    {
      name: "Wildlife Math Shooter",
      concept:
        "An arcade defense shooter powered entirely by solving real-time algebraic formulas.",
      repo: "alphabeastwolffiya/mathshooter",
      playUrl: "https://gaming.arjun.fit/",
      age: "Middle School+",
    },
    {
      name: "Math Mania Race",
      concept:
        "An absolute velocity-training puzzle layout testing sign placement and quick formula balancing.",
      repo: "PB2204/Math-Mania",
      playUrl: "",
      age: "Elementary+",
    },
    {
      name: "Math Metrix",
      concept:
        "Logical layout matrix generator containing mathematical grid triangles and logic numeric pyramids.",
      repo: "jaysavsani07/math-metrix",
      playUrl: "https://github.com",
      age: "Middle School+",
    },
    {
      name: "BattleMath Decimals",
      concept:
        "Browser-based dashboard arena targeting fractional arithmetic against scaling cooldown timers.",
      repo: "JesseRWeigel/battlemath",
      playUrl: "https://github.io",
      age: "Middle School+",
    },
    {
      name: "Math Monsters",
      concept:
        "An urgency-focused response dashboard using cooldown multipliers to build equation accuracy.",
      repo: "lancesnider/math-monsters-game",
      playUrl: "https://github.com",
      age: "Elementary+",
    },
    {
      name: "Algebraggedon Engine",
      concept:
        "Interactive novel interface deploying algebra formulas as operational combat code parameters.",
      repo: "HarkDev/Algebraggedon",
      playUrl: "https://github.com",
      age: "High School+",
    },
    {
      name: "Syncro Automata",
      concept:
        "Graphical transition grid communicating matrix principles through synchronized cursor tracks.",
      repo: "ubavic/awesome-interactive-math",
      playUrl: "https://github.io",
      age: "High School+",
    },
    {
      name: "HyperRogue Explorer",
      concept:
        "Strategic rogue-style dungeon crawl mapping mechanics purely across non-Euclidean geometry lines.",
      repo: "zenorogue/hyperrogue",
      playUrl: "https://roguetemple.com",
      age: "High School+",
    },
    {
      name: "SineRider Track Builder",
      concept:
        "Type graphing equations to build sled tracks through coordinate plane checkpoints.",
      repo: "hackclub/sinerider",
      playUrl: "https://hackclub.dev",
      age: "High School+",
    },
    {
      name: "Math Sprint Arena",
      concept:
        "A neon, fast-paced cognitive simulator to sharpen mental arithmetic speeds.",
      repo: "Amey-Thakur/MATH-SPRINT-GAME",
      playUrl: "https://github.io",
      age: "All Ages",
    },
    {
      name: "Euclidea Compass Construction",
      concept:
        "An elegant geometric construction puzzle game where you use a virtual compass and straightedge to solve complex structural challenges.",
      repo: "ubavic/awesome-interactive-math",
      playUrl: "https://euclidea.xyz",
      age: "Middle School+",
    },
    {
      name: "Hextris Block Rotator",
      concept:
        "A fast-paced puzzle game inspired by Tetris where you spin a central hexagon to match blocks and clear nested color planes.",
      repo: "Hextris/hextris",
      playUrl: "https://hextris.io",
      age: "All Ages",
    },
    {
      name: "Sokyokuban Hyperbolic Grid",
      concept:
        "The classic box-pushing Sokoban puzzle completely redesigned to operate inside a mind-bending, curved hyperbolic plane.",
      repo: "zenorogue/hyperrogue",
      playUrl: "https://roguetemple.com",
      age: "High School+",
    },
    {
      name: "2048 Number Merge",
      concept:
        "Slide numbered grid tiles on a 4x4 layout using powers of 2 to iteratively merge them into the ultimate 2048 brick.",
      repo: "gabrielecirulli/2048",
      playUrl: "https://github.io",
      age: "Elementary+",
    },
    {
      name: "A Dark Room Resource Engine",
      concept:
        "A minimalist, open-source resource simulation testing strategic compound scaling, rate calculation, and supply management.",
      repo: "doublespeakgames/adarkroom",
      playUrl: "https://doublespeakgames.com",
      age: "Middle School+",
    },
    {
      name: "Syncro Automata",
      concept:
        "A logic matrix grid puzzle where you synchronize movement paths using the foundational principles of Automata Theory.",
      repo: "ubavic/awesome-interactive-math",
      playUrl: "https://github.io",
      age: "High School+",
    },
    {
      name: "Math Mania Race",
      concept:
        "An absolute velocity-training puzzle layout testing sign placement and quick formula balancing against rapid countdown clocks.",
      repo: "PB2204/Math-Mania",
      playUrl: "https://github.io",
      age: "Elementary+",
    },
    {
      name: "BattleMath Decimals",
      concept:
        "Browser-based dashboard arena targeting fractional arithmetic against scaling cooldown timers.",
      repo: "JesseRWeigel/battlemath",
      playUrl: "https://github.io",
      age: "Middle School+",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-12 border-t border-zinc-800/60">
      {/* Module Title */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-zinc-100">
          🎮 Playable GitHub Arcade Mainframe
        </h4>
        <p className="text-xs text-zinc-400 mt-1">
          Launch completely free, open-source web games cloned straight from
          developer repositories.
        </p>
      </div>

      {/* Clean Grid Layout (Updated from md:grid-cols-3 to help 10 items balance neatly) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {openSourceGames.map((game, idx) => (
          <div
            key={idx}
            className="bg-zinc-800/20 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-700/50 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start gap-2">
                <h5 className="font-bold text-zinc-100 text-sm leading-snug">
                  {game.name}
                </h5>
                <span className="text-[9px] font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded whitespace-nowrap">
                  {game.age}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                {game.concept}
              </p>
            </div>

            {/* Link Action Footer */}
            <div className="mt-6 pt-3 border-t border-zinc-800/60">
              <div className="text-[10px] font-mono text-zinc-500 mb-3 truncate">
                📦 {game.repo}
              </div>
              <a
                href={game.playUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center text-xs font-bold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-red-400 py-2 rounded-lg transition-colors"
              >
                Launch Game ➔
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
