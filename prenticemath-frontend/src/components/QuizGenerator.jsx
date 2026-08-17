import { useState } from 'react';

export default function QuizGenerator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const testQuestions = [
    {
      q: "Solve for x: 3x - 7 = 14",
      options: ["x = 5", "x = 7", "x = 6", "x = 9"],
      correct: 1, // x = 7
      explanation: "Add 7 to both sides: 3x = 21. Divide by 3: x = 7."
    },
    {
      q: "What is the Greatest Common Divisor (GCD) of 24 and 36?",
      options: ["6", "8", "12", "18"],
      correct: 2, // 12
      explanation: "The factors of 24 are 1,2,3,4,6,8,12,24. The factors of 36 are 1,2,3,4,6,9,12,18,36. The highest common one is 12."
    },
    {
      q: "Find the derivative of f(x) = 4x³ using the Power Rule.",
      options: ["12x²", "4x²", "12x³", "8x"],
      correct: 0, // 12x²
      explanation: "Multiply the exponent by the coefficient (3 * 4 = 12) and subtract 1 from the power: 12x²."
    },
    {
      q: "If a right triangle has side lengths a = 6 and b = 8, what is the length of the hypotenuse c?",
      options: ["c = 9", "c = 10", "c = 14", "c = 12"],
      correct: 1, // c = 10
      explanation: "Using a² + b² = c²: 36 + 64 = 100. The square root of 100 is 10."
    }
  ];

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return; // Block double clicks
    setSelectedAnswer(index);
    if (index === testQuestions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuestion + 1 < testQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-6 bg-zinc-800/40 border border-zinc-800 rounded-2xl shadow-sm">

      {!showResults ? (
        <div>
          {/* Progress Header */}
          <div className="flex justify-between items-center mb-6 pb-3 border-b border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-100">📝 Mock Exam Portal</h3>
            <span className="text-xs font-mono text-zinc-400">
              Question {currentQuestion + 1} of {testQuestions.length}
            </span>
          </div>

          {/* Question Text */}
          <p className="text-xl font-medium text-zinc-200 mb-6">
            {testQuestions[currentQuestion].q}
          </p>

          {/* Options Grid Layout */}
          <div className="space-y-3">
            {testQuestions[currentQuestion].options.map((option, idx) => {
              let btnStyle = "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-zinc-800";

              if (selectedAnswer !== null) {
                if (idx === testQuestions[currentQuestion].correct) {
                  btnStyle = "bg-emerald-950/40 border-emerald-500 text-emerald-400 font-bold";
                } else if (idx === selectedAnswer) {
                  btnStyle = "bg-red-950/40 border-red-600 text-red-400";
                } else {
                  btnStyle = "bg-zinc-900/20 border-zinc-800/40 text-zinc-600 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerClick(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-150 ${btnStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback Explanation and Next Button Action */}
          {selectedAnswer !== null && (
            <div className="mt-6 pt-4 border-t border-zinc-800 space-y-4 animate-fadeIn">
              <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50">
                <strong className="text-zinc-300">Explanation:</strong> {testQuestions[currentQuestion].explanation}
              </p>
              <div className="flex justify-end">
                <button onClick={handleNext} className="bg-red-700 hover:bg-red-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                  {currentQuestion + 1 === testQuestions.length ? "Finish Exam" : "Next Question ➔"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* FINAL RESULTS VIEW SCREEN */
        <div className="text-center py-8 space-y-4">
          <div className="text-5xl">🏆</div>
          <h3 className="text-2xl font-black text-zinc-100 tracking-tight">Exam Complete!</h3>
          <p className="text-sm text-zinc-400">Your total mathematical accuracy score:</p>
          <div className="text-4xl font-mono font-black text-red-500 bg-red-950/20 border border-red-900/30 max-w-[120px] mx-auto py-2 rounded-xl">
            {score}/{testQuestions.length}
          </div>
          <div className="pt-4">
            <button onClick={handleReset} className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm">
              Take Another Test
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
