
export default function MathLiterature() {
  const BOOK_LIST = [
  {
    title: "Sir Cumference and the First Round Table",
    author: "Cindy Neuschwander",
    tier: "kids",
    concept: "Geometry (Radius/Diameter)",
    description:
      "Explores diameter, radius, and circumference using a clever Arthurian legend adventure.",
  },
  {
    title: "How Much Is a Million?",
    author: "David M. Schwartz",
    tier: "kids",
    concept: "big numbers",
    description:
      "Conceptually visualizes massive numbers using imaginative, kid-friendly examples.",
  },

  {
    title: "One Grain of Rice",
    author: "Demi",
    tier: "pre-k to 2nd",
    concept: "exponential growth",
    description:
      "Demonstrates exponential growth through a traditional, engaging folk tale.",
  },
  {
    title: "Ten Black Dots",
    author: "Donald Crews",
    tier: "pre-k to 2nd",
    concept: "counting, number recognition",
    description:
      "Fosters foundational counting and visual number recognition using everyday objects.",
  },
  {
    title: "Spaghetti and Meatballs for All!",
    author: "Marilyn Burns",
    tier: "pre-k to 2nd",
    concept: "perimeter, area",
    description:
      "Explores perimeter and area calculations during a chaotic family dinner.",
  },
  {
    title: "Math Curse",
    author: "Jon Scieszka",
    tier: "pre-k to 2nd",
    concept: "problem-solving",
    description:
      "Turns daily routines into humorous math problem-solving scenarios.",
  },
  {
    title: "A Million Dots",
    author: "Andrew Clements",
    tier: "pre-k to 2nd",
    concept: "numbers, scale",
    description:
      "Shows big numbers step-by-step with real-world scale illustrations.",
  },
  {
    title: "Much Ado About Nothing",
    author: "Edward Einhorn",
    tier: "pre-k to 2nd",
    concept: "zero, placeholders",
    description:
      "Introduces the concept of zero and placeholders through storytelling.",
  },
  {
    title: "The Doorbell Rang",
    author: "Pat Hutchins",
    tier: "pre-k to 2nd",
    concept: "division",
    description:
      "Teaches basic division principles via sharing a plate of cookies.",
  },
  {
    title: "The Number Devil",
    author: "Hans Magnus Enzensberger",
    tier: "3 - 5th grade",
    concept: "prime numbers",
    description:
      "Makes complex topics like prime numbers accessible via dreamscapes.",
  },
  {
    title: "What's Your Angle, Pythagoras?",
    author: "Julie Ellis",
    tier: "3-5th grade",
    concept: "pythagorean theorem",
    description:
      "Uses historical fiction to explain the Pythagorean theorem intuitively.",
  },
  {
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    tier: "3 - 5th Grade",
    concept: "geometry",
    description:
      "Explores dimensional geometry and tesseracts within a science fiction plot.",
  },
  {
    title: "Blockhead: The Life of Fibonacci",
    author: "Joseph D'Agnese",
    tier: "3 - 5th Grade",
    concept: "fibonacci sequence",
    description:
      "Details the history and natural patterns of the Fibonacci sequence.",
  },
  {
    title: "The Phantom Tollbooth",
    author: "Norton Juster",
    tier: "3 - 5th Grade",
    concept: "logic puzzles",
    description:
      "Features wordplay and logic puzzles during an allegorical fantasy journey.",
  },
  {
    title: "The Warlord's Puzzle",
    author: "Virginia Walton Pilegard",
    tier: "3 - 5th Grade",
    concept: "geometry",
    description:
      "Explores spatial reasoning and geometry principles through traditional tangram puzzles.",
  },
  {
    title: "On Beyond a Million",
    author: "David M. Schwartz",
    tier: "3 - 5th Grade",
    concept: "exponents",
    description:
      "Explores powers of ten, exponents, and incredibly massive numbers.",
  },
  {
    title: "G Is for Googol",
    author: "David M. Schwartz",
    tier: "3 - 5th Grade",
    concept: "math glossary",
    description:
      "Provides a comprehensive, accessible math glossary structured in an alphabet-book style.",
  },
  {
    title: "Infinity and Me",
    author: "Kate Hosford",
    tier: "3 - 5th Grade",
    concept: "infinity",
    description:
      "Explores philosophical and mathematical meanings of infinity through a child's eyes.",
  },
  {
    title: "Perimeter, Area, and Volume",
    author: "David A. Adler",
    tier: "3 - 5th Grade",
    concept: "perimeter, area, volume",
    description:
      "Explains foundational spatial math concepts through a fun 3D movie setting.",
  },
  {
    title: "Flatland",
    author: "Edwin A. Abbott",
    tier: "6-12",
    concept: "dimensions",
    description:
      "Explores dimensions and spatial topology through a multi-dimensional geometry allegory.",
  },
  {
    title: "Fermat's Enigma",
    author: "Simon Singh",
    tier: "6-12",
    concept: "number theory",
    description:
      "Tracks the fascinating historical race to solve a legendary number theory puzzle.",
  },
  {
    title: "The Joy of x",
    author: "Steven Strogatz",
    tier: "6-12",
    concept: "various",
    description:
      "Breaks down complex mathematical structures into short, relatable everyday vignettes.",
  },
  {
    title: "How Not to Be Wrong",
    author: "Jordan Ellenberg",
    tier: "6-12",
    concept: "math thinking",
    description:
      "Shows the practical power of mathematical thinking in real-world scenarios.",
  },
  {
    title: "The Man Who Knew Infinity",
    author: "Robert Kanigel",
    tier: "6-12",
    concept: "biography",
    description:
      "Tells the inspiring biography of the self-taught mathematical genius Ramanujan.",
  },
  {
    title: "Weapons of Math Destruction",
    author: "Cathy O'Neil",
    tier: "6-12",
    concept: "bias",
    description:
      "Evaluates data logic safety and algorithmic bias in modern tech societies.",
  },
  {
    title: "Alex's Adventures in Numberland",
    author: "Alex Bellos",
    tier: "6-12",
    concept: "various",
    description:
      "Travels globally to uncover unique cultural and historical math concepts.",
  },
  {
    title: "Zero: The Biography of a Dangerous Idea ",
    author: "Charles Seife",
    tier: "6-12",
    concept: "zero",
    description:
      "Tracks the dangerous, fascinating history of zero and nothingness across civilizations.",
  },
  {
    title: "The Visual Display of Quantitative Information",
    author: "Edward Tufte",
    tier: "6-12",
    concept: "statistics",
    description:
      "Explores data visualization layouts, statistical structures, and professional graphics design.",
  },
  {
    title: "Flatterland",
    author: "Ian Stewart",
    tier: "6-12",
    concept: "string theory",
    description:
      "Explores modern physics, string theory, and complex geometry dimensions in a creative sequel format.",
  },
]

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-12 border-t border-zinc-800/60">
      {/* Module Title */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-zinc-100">
          🎮 Interesting Math Books
        </h4>
        <p className="text-xs text-zinc-400 mt-1">
          Apply mathematical concepts to literature to expand your horizons.
        </p>
      </div>

      {/* Clean Grid Layout (Updated from md:grid-cols-3 to help 10 items balance neatly) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {BOOK_LIST.map((book, idx) => (
          <div
            key={idx}
            className="bg-zinc-800/20 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-zinc-700/50 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start gap-2">
                <h5 className="font-bold text-zinc-100 text-sm leading-snug">
                  {book.title}
                </h5>
                <span className="text-[9px] font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded whitespace-nowrap">
                  {book.author} ({book.tier})

                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                {book.concept}
              </p>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                {book.description}
              </p>
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}


// Use .filter(book => book.tier === activeLevel) to dynamically show them on your tabs!
