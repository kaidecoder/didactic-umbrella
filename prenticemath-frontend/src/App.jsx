import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MathCalculator from './components/MathCalculator';
import FormulaSheet from './components/FormulaSheet';
import TopicGrid from './components/TopicGrid';
import Footer from './components/Footer';

export default function App() {
  const [calculatorTab, setCalculatorTab] = useState('scientific');
  const [showTools, setShowTools] = useState(false);
  // 1. Control the visibility state of the Topic Cards Grid
  const [showTopics, setShowTopics] = useState(false);

  const navigateToTool = (tabId) => {
    setCalculatorTab(tabId);
    setShowTools(true);
    setTimeout(() => {
      const calcElement = document.getElementById('tools-portal-section');
      if (calcElement) calcElement.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // 2. Action to toggle and smoothly scroll to the Topics layout section
  const handleToggleTopics = () => {
    setShowTopics((prev) => !prev);
    setTimeout(() => {
      const topicsElement = document.getElementById('topics-portal-section');
      if (topicsElement) {
        topicsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        <Header
          onToggleTools={() => setShowTools(!showTools)}
          onToggleTopics={handleToggleTopics} // Pass the layout handler to header
          onEnterPortal={() => navigateToTool('scientific')}
          isToolsOpen={showTools}
          isTopicsOpen={showTopics} // Pass active state tracking properties
        />

        <main>
          <Hero />

          {/* Conditional Tools & Formula Section */}
          {showTools && (
            <div id="tools-portal-section" className="bg-zinc-950/40 border-y border-zinc-800 py-6">
              <MathCalculator activeTab={calculatorTab} setActiveTab={setCalculatorTab} />
              <FormulaSheet onLaunchTool={navigateToTool} />
            </div>
          )}

          {/* 3. Conditional Topics Section: Only loads when showTopics is TRUE */}
          {showTopics && (
            <div id="topics-portal-section" className="border-t border-zinc-800/50">
              <TopicGrid />
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
