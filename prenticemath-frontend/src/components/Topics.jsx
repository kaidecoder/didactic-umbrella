import { useState } from "react"

// 1. Define our math taxonomy structure
const mathCategories = {
  arithmetic: {
    label: "Arithmetic",
    topics: [
      "Fractions",
      "Decimals",
      "Percentages",
      "Ratios",
      "Proportion",
      "Place Value",
      "Counting and Number Sense",
      "Money",
      "Rounding & Estimation",
    ],
  },
  preAlgebra: {
    label: "Pre-Algebra",
    topics: ["Order of Operations", "Factors, Primes & Multiples", "Exponents"],
  },
  algebra: {
    label: "Algebra",
    topics: [
      "Coordinates",
      "Linear Equations & Graphs",
      "Factoring Expressions",
      "Quadratic Equations & Graphs",
      "Formulae",
      "Coordinates",
      "Inequalities",
      "Sequences",
      "Series",
    ],
  },
  Geometry: {
    label: "Geometry",
    topics: [
      "Angles",
      "Units of Measure",
      "Perimeter",
      "Area",
      "Volume",
      "Surface Area",
      "Congruence",
      "Similarity",
      "Transformation",
      "Trigonometry",
      "Pythagorean Theorem",
      "Circle Theorems",
    ],
  },
}

export default function App() {
  const [screen] = useState("setup")

  // 2. State hooks for our selections
  const [category, setCategory] = useState("arithmetic")
  // Initialize sub-topic with the first item in the default category
  const [subTopic, setSubTopic] = useState(mathCategories.arithmetic.topics[0])
  const [difficulty, setDifficulty] = useState("medium")
  const [questionStyle, setQuestionStyle] = useState("standard") // 'standard' or 'wordProblem'

  // 3. Handle when the main category changes
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    // Automatically reset the sub-topic to the first item of the new category
    setSubTopic(mathCategories[newCategory].topics[0])
  }

  const startQuiz = () => {
    alert(
      `Generating a ${difficulty} ${questionStyle} quiz for ${category} -> ${subTopic}!`,
    )
    // We will wire this up to our question generation algorithms next
  }

  if (screen === "setup") {
    return (
      <div
        style={{
          padding: "40px",
          maxWidth: "450px",
          margin: "40px auto",
          border: "1px solid #ddd",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          background: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0 }}>
          Quiz Setup Menu 🧮
        </h2>

        <div style={{ margin: "20px 0" }}>
          {/* Main Category Dropdown */}
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Category:
          </label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            {Object.keys(mathCategories).map((key) => (
              <option key={key} value={key}>
                {mathCategories[key].label}
              </option>
            ))}
          </select>

          {/* Dynamic Sub-Topic Dropdown */}
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Sub-Topic:
          </label>
          <select
            value={subTopic}
            onChange={(e) => setSubTopic(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            {mathCategories[category].topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>

          {/* Difficulty Dropdown */}
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Difficulty:
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          {/* Word Problem vs Standard Toggle */}
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Question Style:
          </label>
          <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="style"
                checked={questionStyle === "standard"}
                onChange={() => setQuestionStyle("standard")}
                style={{ marginRight: "6px" }}
              />
              Standard Equations
            </label>
            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="style"
                checked={questionStyle === "wordProblem"}
                onChange={() => setQuestionStyle("wordProblem")}
                style={{ marginRight: "6px" }}
              />
              Word Problems
            </label>
          </div>
        </div>

        <button
          onClick={startQuiz}
          style={{
            width: "100%",
            padding: "14px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Generate Quiz
        </button>
      </div>
    )
  }

  return null
}
