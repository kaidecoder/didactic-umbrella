export default function PlayableGames() {
  const openSourceGames = [
    {
      name: "SineRider Track Builder",
      concept: "Type graphing equations to build sled tracks through coordinate plane checkpoints.",
      repo: "hackclub/sinerider",
      playUrl: "https://hackclub.com",
      age: "High School+"
    },
    {
      name: "Math Sprint Arena",
      concept: "A neon, fast-paced cognitive simulator to sharpen mental arithmetic speeds.",
      repo: "Amey-Thakur/MATH-SPRINT-GAME",
      playUrl: "https://github.io",
      age: "All Ages"
    },
    {
      name: "Wildlife Math Shooter",
      concept: "An arcade defense shooter powered entirely by solving real-time algebraic formulas.",
      repo: "alphabeastwolffiya/mathshooter",
      playUrl: "https://github.com",
      age: "Middle School+"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 mt-16 pt-12 border-t border-zinc-800/60">

      {/* Module Title */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-zinc-100">🎮 Playable GitHub Arcade Mainframe</h4>
        <p className="text-xs text-zinc-400 mt-1">
          Launch completely free, open-source web games cloned straight from developer repositories.
        </p>
      </div>

      {/* Clean Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {openSourceGames.map((game, idx) => (
          <div
            key={idx}
            className="bg-zinc-800/20 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-700/50 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start gap-2">
                <h5 className="font-bold text-zinc-100 text-sm leading-snug">{game.name}</h5>
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
  );
}
