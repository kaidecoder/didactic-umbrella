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
import PlayableGames from "./components/PlayableGames"
import ReferenceHub from "./components/ReferenceHub"
import StudyCenter from "./components/StudyCenter"
import MathLiterature from "./components/MathLiterature"

export default function App() {
  // --- VISIBILITY STATES FOR EACH SECTION ---
  const [calculatorTab, setCalculatorTab] = useState("scientific")
  const [showTools, setShowTools] = useState(false)
  const [showTopics, setShowTopics] = useState(false)
  const [showFun, setShowFun] = useState(false)
  const [showMathHub, setShowMathHub] = useState(false)

  // --- CONNECTED NAVIGATION SMOOTH SCROLL HANDLER ---
  const navigateToTool = (tabId) => {
    setCalculatorTab(tabId)
    setShowTools(true)
    setShowFun(false)
    setShowMathHub(false)
    setTimeout(() => {
      document
        .getElementById("tools-portal-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  // This returns TRUE only if all tools, fun sections, exams, and topics are closed
  const isLandingPage = !showTools && !showFun && !showMathHub && !showTopics

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        {/* Pass down clear button control hooks to your header bar */}
        <Header
          onResetHome={() => {
            setShowTools(false)
            setShowFun(false)
            setShowMathHub(false)
            setShowTopics(false)
          }}
          onToggleTools={() => {
            setShowTools(!showTools)
            setShowFun(false)
            setShowMathHub(false)
            setShowTopics(false) // Closes topics
          }}
          onToggleFun={() => {
            setShowFun(!showFun)
            setShowTools(false)
            setShowMathHub(false)
            setShowTopics(false) // Closes topics
          }}
          onToggleMathHub={() => {
            setShowMathHub(!showMathHub)
            setShowTools(false)
            setShowFun(false)
            setShowTopics(false) // Closes topics
          }}
          onToggleTopics={() => {
            setShowTopics(!showTopics)
            setShowTools(false) // Closes tools
            setShowFun(false) // Closes fun
            setShowMathHub(false) // Closes exams to fix the sticking highlight!
          }}
          isToolsOpen={showTools}
          isTopicsOpen={showTopics}
          isFunOpen={showFun}
          isMathHubOpen={showMathHub}
        />

        <main>
          {/* Main welcoming branding text */}
          {/* --- LANDING PAGE: Main welcoming branding text --- */}
          {isLandingPage && <Hero />}

          <div className="min-h-screen bg-zinc-950 text-white">
            {/* Your Navbar and Calculators go here */}

          </div>

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
              <ReferenceHub />
              <MathLiterature />

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
              <PlayableGames />
            </div>
          )}

          {/* --- VIEW BLOCK 3: EXAMS PRACTICE ENGINE & PDF RESOURCE CENTER --- */}
          {/* This tells the computer to read the quiz out loud the exact moment it pops open */}
          {showMathHub && (
            <div
              id="exams-portal-section"
              aria-live="polite"
              className="bg-zinc-950/40 border-y border-zinc-800 py-12"
            >
              <StudyCenter />
              <QuizGenerator />
              <WorksheetDownloads />
            </div>
          )}

          {/* --- VIEW BLOCK 4: RESOURCE GENRES GRID --- */}
          {/* --- VIEW BLOCK 4: RESOURCE GENRES GRID --- */}
          {showTopics && (
            <div
              id="topics-portal-section"
              className="bg-zinc-950/40 border-y border-zinc-800 py-12 w-full min-h-[300px]"
            >
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
