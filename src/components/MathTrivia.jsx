import { useState } from 'react';

export default function MathTrivia() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCards, setAnsweredCards] = useState(new Set());

  const triviaDeck = [
    {
      question: "I am an odd number. Take away one letter from my name and I become completely even. What number am I?",
      answer: "Seven",
      explanation: "If you remove the letter 'S' from the word 'SEVEN', it spells 'EVEN'!"
    },
    {
      question: "A doctor gives you 3 pills and tells you to take one every half hour. How many minutes will the pills last?",
      answer: "60 minutes",
      explanation: "You take the 1st pill immediately (0 mins), the 2nd pill at 30 minutes, and the 3rd pill at 60 minutes. Total time elapsed is 1 hour."
    },
    {
      question: "Two fathers and two sons go fishing. They catch exactly 3 fish, yet each person takes home one whole fish. How is this possible?",
      answer: "There are only 3 people: A grandfather, a father, and a son.",
      explanation: "The father is both a son to the grandfather and a father to the youngest boy. This perfectly makes two fathers and two sons using only three individuals."
    },
    {
      question: "What single mathematical symbol can you place between the numbers 5 and 6 to make a number that is greater than 5 but less than 6?",
      answer: "A decimal point (.)",
      explanation: "Placing a decimal point between 5 and 6 creates '5.6', which sits perfectly between both integers."
    }
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % triviaDeck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev - 1 + triviaDeck.length) % triviaDeck.length);
  };

  const handleCorrect = () => {
    if (!answeredCards.has(currentCard)) {
      setScore((prev) => prev + 1);
      setAnsweredCards((prev) => new Set(prev).add(currentCard));
    }
    handleNext();
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Summary Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/40">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100">
              ⚡ Brain Teaser Arena
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Test your logical reasoning and math riddle skills. Click the card to flip!
            </p>
          </div>
          {/* Score Counter Tag Layout */}
          <div className="bg-zinc-800/60 border border-zinc-700/50 px-4 py-2 rounded-xl text-xs font-bold text-zinc-300">
            Score: <span className="text-red-400 text-sm font-mono ml-1">{score}</span> / {triviaDeck.length}
          </div>
        </div>

        {/* The Card Deck Layout Area */}
        <div className="relative max-w-xl mx-auto h-72 perspective-1000">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full h-full cursor-pointer relative duration-500 transform-style-3d rounded-2xl shadow-xl border border-zinc-800 ${
              isFlipped ? 'rotate-y-180 bg-zinc-950/80' : 'bg-zinc-800/40 hover:bg-zinc-800'
            } transition-all p-8 flex flex-col justify-between`}
          >

            {/* FRONT OF THE CARD */}
            {!isFlipped ? (
              <div className="flex flex-col h-full justify-between backface-hidden">
                <div className="flex justify-between items-center text-xs font-bold tracking-wider text-zinc-500 uppercase">
                  <span>Question {currentCard + 1} of {triviaDeck.length}</span>
                  <span className="text-red-500/70">Click to Flip</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-zinc-100 text-center leading-relaxed px-2 my-auto">
                  {triviaDeck[currentCard].question}
                </p>
                <div className="w-full bg-zinc-700/20 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-red-600 h-full transition-all duration-300"
                    style={{ width: `${((currentCard + 1) / triviaDeck.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              /* BACK OF THE CARD */
              <div className="flex flex-col h-full justify-between rotate-y-180 backface-hidden">
                <div className="text-xs font-bold tracking-wider text-emerald-500 uppercase">
                  ✓ Verified Solution
                </div>
                <div className="text-center my-auto space-y-3">
                  <h4 className="text-2xl font-black text-zinc-100 tracking-tight">
                    {triviaDeck[currentCard].answer}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
                    {triviaDeck[currentCard].explanation}
                  </p>
                </div>
                {/* Scoring input row tags */}
                <div className="flex gap-2 justify-center" onClick={(e) => e.stopPropagation()}>
                  <button onClick={handleCorrect} className="px-4 py-1.5 bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded-lg text-xs font-bold hover:bg-emerald-900/20 transition-colors">
                    I Got It Right!
                  </button>
                  <button onClick={handleNext} className="px-4 py-1.5 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-lg text-xs font-bold hover:bg-zinc-800 transition-colors">
                    Skip
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Deck Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2.5 bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
