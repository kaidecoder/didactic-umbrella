export default function WorksheetDownloads() {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-12 pt-8 border-t border-zinc-800/60">

      {/* Component Title and Summary Description */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-zinc-100">📥 Master Printable PDF Vaults</h4>
        <p className="text-xs text-zinc-400 mt-1">
          Access massive, free directories of high-quality worksheets complete with step-by-step answer keys.
        </p>
      </div>

      {/* Two-Box Streamlined Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Box 1: Higher Level Subjects Vault */}
        <div className="bg-zinc-800/20 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-700/50 transition-colors">
          <div>
            <h5 className="font-bold text-sm text-zinc-200">📐 Algebra, Geometry & Calculus Packs</h5>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              Full textbook-quality worksheets matching high school core math curriculum templates.
            </p>
          </div>
          <a
            href="http://kutasoftware.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 block text-center text-xs font-bold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-red-400 py-2.5 rounded-lg transition-colors"
          >
            Open Kuta Software Directory ➔
          </a>
        </div>

        {/* Box 2: Core Fundamentals Generator Vault */}
        <div className="bg-zinc-800/20 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-700/50 transition-colors">
          <div>
            <h5 className="font-bold text-sm text-zinc-200">🔢 Arithmetic, GCD, LCM & Fractions</h5>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
              Dynamic software generators to print completely custom math arithmetic sheets and basic factoring tables.
            </p>
          </div>
          <a
            href="https://math-aids.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 block text-center text-xs font-bold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-red-400 py-2.5 rounded-lg transition-colors"
          >
            Open Math-Aids Generator ➔
          </a>
        </div>

      </div>
    </div>
  );
}
