import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MathCalculator from './components/MathCalculator';
import FormulaSheet from './components/FormulaSheet';
import MathTrivia from './components/MathTrivia'; // <-- Import Trivia Card Deck
import TopicGrid from './components/TopicGrid';
import Footer from './components/Footer';
import GameDirectory from './components/GameDirectory';

export default function App() {
  const [calculatorTab, setCalculatorTab] = useState('scientific');
  const [showTools, setShowTools] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  // Separate dynamic state for the Fun Games section
  const [showFun, setShowFun] = useState(false);

  const navigateToTool = (tabId) => {
    setCalculatorTab(tabId);
    setShowTools(true);
    setShowFun(false); // Clean overlay closing toggle
    setTimeout(() => {
      document.getElementById('tools-portal-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        <Header
          onToggleTools={() => { setShowTools(!showTools); setShowFun(false); }}
          onToggleFun={() => { setShowFun(!showFun); setShowTools(false); }} // Handle Fun toggle button separately
          onToggleTopics={() => setShowTopics(!showTopics)}
          onEnterPortal={() => navigateToTool('scientific')}
          isToolsOpen={showTools}
          isTopicsOpen={showTopics}
          isFunOpen={showFun}
        />

        <main>
          <Hero />

          {/* Pure Numerical calculation Tools module layout */}
          {showTools && (
            <div id="tools-portal-section" className="bg-zinc-950/40 border-y border-zinc-800 py-6">
              <MathCalculator activeTab={calculatorTab} setActiveTab={setCalculatorTab} />
              <FormulaSheet onLaunchTool={navigateToTool} />
            </div>
          )}

          {/* Interactive Educational Fun Games module layout */}
          {showFun && (
            <div id="fun-games-portal-section" className="bg-zinc-950/40 border-y border-zinc-800 py-6">
              <MathTrivia />
              <GameDirectory />
            </div>
          )}

          {showTopics && <TopicGrid />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
