import { useState } from "react"

// Import all your clean, separate component files
import Header from "./components/Header"
import Hero from "./components/Hero"
import MathCalculator from "./components/MathCalculator"
import FormulaSheet from "./components/FormulaSheet"
import MathTrivia from "./components/MathTrivia"
import GameDirectory from "./components/GameDirectory"
import QuizGenerator from "./components/QuizGenerator"
import WorksheetDownloads from "./components/WorksheetDownloads"
import TopicGrid from "./components/TopicGrid"
import Footer from "./components/Footer"

export default function App() {
  // --- VISIBILITY STATES FOR EACH SECTION ---
  const [calculatorTab, setCalculatorTab] = useState("scientific")
  const [showTools, setShowTools] = useState(false)
  const [showTopics, setShowTopics] = useState(false)
  const [showFun, setShowFun] = useState(false)
  const [showExams, setShowExams] = useState(false)

  // --- CONNECTED NAVIGATION SMOOTH SCROLL HANDLER ---
  const navigateToTool = (tabId) => {
    setCalculatorTab(tabId)
    setShowTools(true)
    setShowFun(false)
    setShowExams(false)
    setTimeout(() => {
      document
        .getElementById("tools-portal-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        {/* Pass down clear button control hooks to your header bar */}
        <Header
          onToggleTools={() => {
            setShowTools(!showTools)
            setShowFun(false)
            setShowExams(false)
          }}
          onToggleFun={() => {
            setShowFun(!showFun)
            setShowTools(false)
            setShowExams(false)
          }}
          onToggleExams={() => {
            setShowExams(!showExams)
            setShowTools(false)
            setShowFun(false)
          }}
          onToggleTopics={() => setShowTopics(!showTopics)}
          onEnterPortal={() => navigateToTool("scientific")}
          // CRUCIAL COUPLING LINES: Ensure these 4 lines match your useState variables exactly
          isToolsOpen={showTools}
          isTopicsOpen={showTopics}
          isFunOpen={showFun}
          isExamsOpen={showExams}
        />

        <main>
          {/* Main welcoming branding text */}
          <Hero />

          {/* --- VIEW BLOCK 1: PURE UTILITY TOOLS & SOLUTIONS --- */}
          {showTools && (
            <div
              id="tools-portal-section"
              className="bg-zinc-950/40 border-y border-zinc-800 py-12"
            >
              <MathCalculator
                activeTab={calculatorTab}
                setActiveTab={setCalculatorTab}
              />
              <FormulaSheet onLaunchTool={navigateToTool} />
            </div>
          )}

          {/* --- VIEW BLOCK 2: FUN LEARNING TRIVIA & GAMES DIRECTORY --- */}
          {showFun && (
            <div
              id="fun-games-portal-section"
              className="bg-zinc-950/40 border-y border-zinc-800 py-12"
            >
              <MathTrivia />
              <GameDirectory />
            </div>
          )}

          {/* --- VIEW BLOCK 3: EXAMS PRACTICE ENGINE & PDF RESOURCE CENTER --- */}
          {/* This tells the computer to read the quiz out loud the exact moment it pops open */}
          {showExams && (
            <div
              id="exams-portal-section"
              aria-live="polite"
              className="bg-zinc-950/40 border-y border-zinc-800 py-12"
            >
              <QuizGenerator />
              <WorksheetDownloads />
            </div>
          )}

          {/* --- VIEW BLOCK 4: RESOURCE GENRES GRID --- */}
          {showTopics && (
            <div id="topics-portal-section">
              <TopicGrid />
            </div>
          )}
        </main>
      </div>

      {/* Dynamic bottom layout shell map */}
      <Footer />
    </div>
  )
}
