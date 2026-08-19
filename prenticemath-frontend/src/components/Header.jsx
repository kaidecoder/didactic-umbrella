import { useState } from "react"

export default function Header({
  onResetHome,
  onToggleTools,
  onToggleFun,
  onToggleExams,
  onToggleTopics,
  isToolsOpen,
  isTopicsOpen,
  isFunOpen,
  isExamsOpen,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Checks if no other sections are currently highlighted
  const isHomeActive =
    !isToolsOpen && !isFunOpen && !isExamsOpen && !isTopicsOpen

  const handleNavClick = (toggleAction) => {
    toggleAction()
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* --- BRAND LOGO --- */}
        <div
          onClick={onResetHome}
          className="flex items-center space-x-2 cursor-pointer z-50"
        >
          <span className="text-xl font-bold tracking-tight text-white select-none">
            Prentice<span className="text-red-500">Math</span>
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION BAR --- */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={onResetHome}
            className={`transition ${isHomeActive ? "text-red-400 font-medium" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Home
          </button>
          <button
            onClick={onToggleTools}
            className={`transition ${isToolsOpen ? "text-red-400 font-medium" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Tools
          </button>
          <button
            onClick={onToggleFun}
            className={`transition ${isFunOpen ? "text-red-400 font-medium" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Fun Zone
          </button>
          <button
            onClick={onToggleExams}
            className={`transition ${isExamsOpen ? "text-red-400 font-medium" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Exams
          </button>
          <button
            onClick={onToggleTopics}
            className={`transition ${isTopicsOpen ? "text-red-400 font-medium" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Topics
          </button>
        </nav>

        {/* --- FIXED HAMBURGER BUTTON --- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900/60 focus:outline-none transition z-50"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6 block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* --- FIXED MOBILE DRAWER DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-4 pt-2 pb-6 space-y-2 flex flex-col w-full shadow-2xl absolute left-0 top-16 z-40">
          <button
            onClick={() => handleNavClick(onResetHome)}
            className={`text-left py-2 px-3 rounded-lg ${isHomeActive ? "text-red-400 bg-zinc-900/50" : "text-zinc-400"}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick(onToggleTools)}
            className={`text-left py-2 px-3 rounded-lg ${isToolsOpen ? "text-red-400 bg-zinc-900/50" : "text-zinc-400"}`}
          >
            Tools
          </button>
          <button
            onClick={() => handleNavClick(onToggleFun)}
            className={`text-left py-2 px-3 rounded-lg ${isFunOpen ? "text-red-400 bg-zinc-900/50" : "text-zinc-400"}`}
          >
            Fun Zone
          </button>
          <button
            onClick={() => handleNavClick(onToggleExams)}
            className={`text-left py-2 px-3 rounded-lg ${isExamsOpen ? "text-red-400 bg-zinc-900/50" : "text-zinc-400"}`}
          >
            Exams
          </button>
          <button
            onClick={() => handleNavClick(onToggleTopics)}
            className={`text-left py-2 px-3 rounded-lg ${isTopicsOpen ? "text-red-400 bg-zinc-900/50" : "text-zinc-400"}`}
          >
            Topics
          </button>
        </div>
      )}
    </header>
  )
}
