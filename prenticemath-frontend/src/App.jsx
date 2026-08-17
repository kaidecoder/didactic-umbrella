import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MathCalculator from './components/MathCalculator';
import FormulaSheet from './components/FormulaSheet';
import MathTrivia from './components/MathTrivia';
import GameDirectory from './components/GameDirectory';
import QuizGenerator from './components/QuizGenerator'; // <-- 1. Import it here
import TopicGrid from './components/TopicGrid';
import Footer from './components/Footer';

export default function App() {
  const [calculatorTab, setCalculatorTab] = useState('scientific');
  const [showTools, setShowTools] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showFun, setShowFun] = useState(false);
  // Dynamic state switch tracking for the Exams section
  const [showExams, setShowExams] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        <Header
          onToggleTools={() => { setShowTools(!showTools); setShowFun(false); setShowExams(false); }}
          onToggleFun={() => { setShowFun(!showFun); setShowTools(false); setShowExams(false); }}
          onToggleExams={() => { setShowExams(!showExams); setShowTools(false); setShowFun(false); }} // Handle exam toggles
          onToggleTopics={() => setShowTopics(!showTopics)}
          // ... pass down your other states ...
          isExamsOpen={showExams}
        />

        <main>
          <Hero />

          {/* Conditional Render Blocks */}
          {showTools && <div className="bg-zinc-950/40 border-y border-zinc-800 py-6"><MathCalculator activeTab={calculatorTab} setActiveTab={setCalculatorTab}/><FormulaSheet onLaunchTool={setCalculatorTab}/></div>}
          {showFun && <div className="bg-zinc-950/40 border-y border-zinc-800 py-6"><MathTrivia /><GameDirectory /></div>}

          {/* 2. Render the interactive test engine cleanly right here */}
          {showExams && (
            <div id="exams-portal-section" className="bg-zinc-950/40 border-y border-zinc-800 py-6">
              <QuizGenerator />
            </div>
          )}

          {showTopics && <TopicGrid />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
