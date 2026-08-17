import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MathCalculator from './components/MathCalculator';
import FormulaSheet from './components/FormulaSheet';
import TopicGrid from './components/TopicGrid';
import Footer from './components/Footer';

export default function App() {
  const [calculatorTab, setCalculatorTab] = useState('scientific');
  // 1. Controls whether the tools container is rendered on screen
  const [showTools, setShowTools] = useState(false);

  const navigateToTool = (tabId) => {
    setCalculatorTab(tabId);
    setShowTools(true); // Force the container open if linked from inside

    // Smooth scroll down after React finishes updating the layout frame
    setTimeout(() => {
      const calcElement = document.getElementById('tools-portal-section');
      if (calcElement) {
        calcElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const toggleToolsSection = () => {
    setShowTools((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        {/* Pass action props up to header clicks */}
        <Header
          onToggleTools={toggleToolsSection}
          onEnterPortal={() => navigateToTool('scientific')}
          isToolsOpen={showTools}
        />

        <main>
          <Hero />

          {/* 2. Conditional Rendering Code Block: Only loads when showTools is TRUE */}
          {showTools && (
            <div id="tools-portal-section" className="bg-zinc-950/40 border-y border-zinc-800 py-6 transition-all duration-300">
              <MathCalculator activeTab={calculatorTab} setActiveTab={setCalculatorTab} />
              <FormulaSheet onLaunchTool={navigateToTool} />
            </div>
          )}

          <TopicGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
}
