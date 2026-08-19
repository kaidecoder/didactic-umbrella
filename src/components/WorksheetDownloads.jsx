import { useState } from "react"
import { mathGenerators } from "../utils/mathGenerators"

export default function WorksheetDownloads() {
  const [selectedTopic, setSelectedTopic] = useState("algebra")
  const [generatedProblems, setGeneratedProblems] = useState([])

  const topicsMetadata = {
    algebra: {
      name: "Algebra Core Foundations",
      standard: "CCSS.MATH.CONTENT.HSA.REI.B.3",
    },
    geometry: {
      name: "High School Geometry Rigor",
      standard: "CCSS.MATH.CONTENT.HSG.SRT.C.8",
    },
    calculus: {
      name: "Calculus Limits & Rates",
      standard: "AP.CALCULUS.CHA-2",
    },
  }

  const handleGenerate = () => {
    // Dynamically look up the matching algorithm rule block by its key name string
    const targetGenerator = mathGenerators[selectedTopic]
    if (targetGenerator) {
      setGeneratedProblems(targetGenerator())
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-zinc-950/40 rounded-xl border border-zinc-800">
      {/* Configuration Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-zinc-800/60">
        <div>
          <h3 className="text-xl font-bold text-zinc-100">
            📋 Multi-Topic Worksheet Machine
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Select a framework target domain to procedurally spin up customized
            assignments.
          </p>
        </div>

        {/* Action Controls Frame Layout */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value)
              setGeneratedProblems([]) // Wipe current board grid clean when swapping concepts
            }}
            className="bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs rounded-xl px-3 py-2.5 outline-none focus:border-red-500 cursor-pointer"
          >
            <option value="algebra">Algebra (Linear Solutions)</option>
            <option value="geometry">Geometry (Pythagorean Principles)</option>
            <option value="calculus">Calculus (Derivative Vectors)</option>
          </select>

          <button
            onClick={handleGenerate}
            className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            🎲 Compile Matrix Sheet
          </button>
        </div>
      </div>

      {/* Render Document Node Sheet Area */}
      {generatedProblems.length > 0 ? (
        <div
          id="printable-worksheet-pane"
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl"
        >
          {/* Internal Document Branding Sub-Header */}
          <div className="border-b border-zinc-800 pb-4 mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <h4 className="font-extrabold text-zinc-200 tracking-wide text-sm uppercase">
                {topicsMetadata[selectedTopic].name} Practice Packet
              </h4>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                Mapping Node Target: {topicsMetadata[selectedTopic].standard}
              </div>
            </div>
            <div className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-3 py-1 rounded bg-zinc-950/40 self-start sm:self-auto">
              Date: __________________
            </div>
          </div>

          {/* Core Numerical Questions Output Grid Mapping */}
          <div className="space-y-6 my-2">
            {generatedProblems.map((prob) => (
              <div
                key={prob.id}
                className="pb-4 border-b border-zinc-800/30 flex items-start space-x-4"
              >
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950/60 border border-zinc-800 px-2 py-0.5 rounded">
                  {prob.id < 10 ? `0${prob.id}` : prob.id}
                </span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-zinc-100 tracking-wide leading-relaxed">
                    {prob.question}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1 italic selection:bg-red-950 select-none">
                    💡 Hint: {prob.hint}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browser System Global Print Utility Overlay Button */}
          <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
            <button
              onClick={() => window.print()}
              className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1.5"
            >
              🖨️ Open Print Dashboard / Save PDF ➔
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10">
          <p className="text-zinc-500 text-xs font-medium">
            Choose a target topic parameters and click{" "}
            <span className="text-red-400">"Compile Matrix Sheet"</span> to
            procedurally format your questions document.
          </p>
        </div>
      )}
    </div>
  )
}
