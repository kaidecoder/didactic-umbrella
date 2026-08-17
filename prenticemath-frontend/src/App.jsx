import Header from './components/Header';
import Hero from './components/Hero';
import TopicGrid from './components/TopicGrid';
import MathCalculator from './components/MathCalculator';
import Footer from './components/Footer';

export default function App() {
  return (
    // Locked in your beautiful bg-zinc-900 and inverted global text color to zinc-100
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col justify-between">
      <div>
        <Header />
        <main>
          <Hero />
          <MathCalculator />
          <TopicGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
}
