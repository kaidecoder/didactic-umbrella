// src/utils/mathGenerators.js

export const mathGenerators = {
  algebra: () => {
    const problems = [];
    for (let i = 1; i <= 10; i++) {
      const a = Math.floor(Math.random() * 9) + 2; // 2-10
      const x = Math.floor(Math.random() * 11) + 2; // 2-12 (Hidden answer)
      const b = Math.floor(Math.random() * 19) + 1; // 1-19
      const c = a * x + b;
      problems.push({
        id: i,
        question: `Solve for x:  ${a}x + ${b} = ${c}`,
        hint: "Isolate the variable by subtracting, then dividing."
      });
    }
    return problems;
  },

  geometry: () => {
    const problems = [];
    // Fixed: Filled in the missing multiplier array brackets
    const multipliers = [];

    for (let i = 1; i <= 10; i++) {
      const m = multipliers[Math.floor(Math.random() * multipliers.length)];

      // Common Pythagorean triples to guarantee clean integers (3-4-5, 5-12-13, 8-15-17)
      const triples = [
        { a: 3 * m, b: 4 * m, c: 5 * m },
        { a: 5 * m, b: 12 * m, c: 13 * m },
        { a: 8 * m, b: 15 * m, c: 17 * m }
      ];
      const chosen = triples[Math.floor(Math.random() * triples.length)];

      problems.push({
        id: i,
        question: `In a right triangle, side A = ${chosen.a} cm and side B = ${chosen.b} cm. Find the length of the hypotenuse (Side C).`,
        hint: "Use the theorem formula: a² + b² = c²"
      });
    }
    return problems;
  },

  calculus: () => {
    const problems = [];
    // Fixed: Filled in the missing power numbers array brackets
    const powers = [];

    for (let i = 1; i <= 10; i++) {
      const coefficient = Math.floor(Math.random() * 8) + 2; // 2-9
      const n = powers[Math.floor(Math.random() * powers.length)]; // Exponent
      const constant = Math.floor(Math.random() * 20) + 1;

      problems.push({
        id: i,
        question: `Find the derivative f'(x) if f(x) = ${coefficient}x${getSuperscript(n)} + ${constant}`,
        hint: "Apply the Power Rule: d/dx [xⁿ] = n·xⁿ⁻¹"
      });
    }
    return problems;
  }
};

// Simple utility function to output clean math formatting indices
function getSuperscript(num) {
  const superscripts = { 2: '²', 3: '³', 4: '⁴', 5: '⁵' };
  return superscripts[num] || `^${num}`;
}
