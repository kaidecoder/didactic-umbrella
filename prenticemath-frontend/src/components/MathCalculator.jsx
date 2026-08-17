import { useState } from 'react';
// Import the clean mathematical helper functions
import { gcd, lcm, decimalToFraction } from '../utils/mathUtils';

export default function MathCalculator() {
  const [activeTab, setActiveTab] = useState('scientific');
  const [display, setDisplay] = useState('');

  // Component Inputs & Outputs State
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [hypotenuse, setHypotenuse] = useState(null);

  const [quadA, setQuadA] = useState('');
  const [quadB, setQuadB] = useState('');
  const [quadC, setQuadC] = useState('');
  const [roots, setRoots] = useState(null);

  const [decimalInput, setDecimalInput] = useState('');
  const [fractionResult, setFractionResult] = useState('');

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [factorsResult, setFactorsResult] = useState({ gcd: null, lcm: null });

  // --- ONSCREEN BUTTON ACTIONS ---
  const handleScientificAction = (action) => {
    try {
      const val = parseFloat(display) || 0;
      switch (action) {
        case 'sin': setDisplay(Math.sin(val * (Math.PI / 180)).toFixed(6)); break;
        case 'cos': setDisplay(Math.cos(val * (Math.PI / 180)).toFixed(6)); break;
        case 'tan': setDisplay(Math.tan(val * (Math.PI / 180)).toFixed(6)); break;
        case 'sqrt': setDisplay(Math.sqrt(val).toString()); break;
        case 'log': setDisplay(Math.log10(val).toFixed(6)); break;
        case 'ln': setDisplay(Math.log(val).toFixed(6)); break;
        case 'sq': setDisplay(Math.pow(val, 2).toString()); break;
        case 'pi': setDisplay((prev) => prev + Math.PI.toFixed(6)); break;
        default: break;
      }
    } catch { setDisplay('Error'); }
  };

  // --- SOLVER HANDLERS ---
  const handlePythagorean = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    if (!isNaN(a) && !isNaN(b)) setHypotenuse(Math.sqrt(a*a + b*b).toFixed(4));
  };

  const handleQuadratic = () => {
    const a = parseFloat(quadA), b = parseFloat(quadB), c = parseFloat(quadC);
    if (isNaN(a) || isNaN(b) || isNaN(c)) return;
    const disc = b * b - 4 * a * c;
    if (disc < 0) {
      setRoots("No real roots");
    } else {
      setRoots(`x1 = ${((-b + Math.sqrt(disc)) / (2*a)).toFixed(4)}, x2 = ${((-b - Math.sqrt(disc)) / (2*a)).toFixed(4)}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">

      {/* 🧭 Tabs Header Navigation Row */}
      <div className="mb-6 border-b border-slate-100 flex flex-wrap gap-4 md:gap-6">
        {['scientific', 'pythag', 'quad', 'decToFrac', 'gcdLcm'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-bold capitalize transition-all ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {tab === 'decToFrac' ? '🥞 Decimal ➔ Fraction' : tab === 'gcdLcm' ? '🔢 GCD & LCM' : tab}
          </button>
        ))}
      </div>

      {/* 🔬 TAB 1: SCIENTIFIC CALCULATOR GRID */}
      {activeTab === 'scientific' && (
        <div className="max-w-xl mx-auto bg-slate-900 p-5 rounded-2xl shadow-xl">
          <div className="bg-slate-950 text-emerald-400 text-right text-3xl font-mono p-4 rounded-xl mb-4 h-16 flex items-center justify-end tracking-wider border border-slate-800">{display || '0'}</div>
          <div className="grid grid-cols-8 gap-2">
            {/* Left Scientific Panel (3/8 column footprint) */}
            <div className="col-span-3 grid grid-cols-2 gap-2 border-r border-slate-800 pr-2">
              {['sin','cos','tan','sqrt','log','ln','sq','pi'].map((op) => (
                <button key={op} onClick={() => handleScientificAction(op)} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg">{op === 'sq' ? 'x²' : op === 'sqrt' ? '√' : op === 'pi' ? 'π' : op}</button>
              ))}
            </div>
            {/* Right Pad Keyboard Panel (5/8 column footprint) */}
            <div className="col-span-5 grid grid-cols-4 gap-2 pl-1">
              <button onClick={() => setDisplay('')} className="col-span-2 bg-red-950 hover:bg-red-900 text-red-400 font-bold py-3 rounded-lg text-xs">AC</button>
              <button onClick={() => setDisplay((p) => p.slice(0, -1))} className="bg-slate-800 text-white font-bold py-3 rounded-lg text-xs">DEL</button>
              <button onClick={() => setDisplay((p) => p + '/')} className="bg-slate-800 text-blue-400 font-bold py-3 rounded-lg text-sm">/</button>
              {['7','8','9','*','4','5','6','-','1','2','3','+'].map((c) => (
                <button key={c} onClick={() => setDisplay((p) => p + c)} className={`font-bold py-3 rounded-lg text-sm ${['*','-','+'].includes(c) ? 'bg-slate-800 text-blue-400' : 'bg-slate-700 text-white'}`}>{c}</button>
              ))}
              <button onClick={() => setDisplay((p) => p + '0')} className="col-span-2 bg-slate-700 text-white font-bold py-3 rounded-lg text-sm">0</button>
              <button onClick={() => setDisplay((p) => p + '.')} className="bg-slate-700 text-white font-bold py-3 rounded-lg text-sm">.</button>
              <button onClick={() => setDisplay(Function(`return ${display}`)().toString())} className="bg-blue-600 text-white font-bold py-3 rounded-lg text-sm">=</button>
            </div>
          </div>
        </div>
      )}

      {/* 📐 TAB 2: PYTHAGOREAN THEOREM */}
      {activeTab === 'pythag' && (
        <div className="space-y-4 max-w-sm mx-auto py-4">
          <h3 className="text-lg font-bold text-slate-800">Pythagorean Solver (c = √a² + b²)</h3>
          <input type="number" placeholder="Side A" value={sideA} onChange={(e) => setSideA(e.target.value)} className="w-full border p-2.5 rounded-xl outline-none focus:border-blue-500" />
          <input type="number" placeholder="Side B" value={sideB} onChange={(e) => setSideB(e.target.value)} className="w-full border p-2.5 rounded-xl outline-none focus:border-blue-500" />
          <button onClick={handlePythagorean} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700">Solve Hypotenuse</button>
          {hypotenuse && <div className="p-3 bg-blue-50 text-blue-700 font-mono rounded-xl text-center border border-blue-100">Hypotenuse (c) = {hypotenuse}</div>}
        </div>
      )}

      {/* 🧮 TAB 3: QUADRATIC SOLVER */}
      {activeTab === 'quad' && (
        <div className="space-y-4 max-w-sm mx-auto py-4">
          <h3 className="text-lg font-bold text-slate-800">Quadratic Solver (ax² + bx + c = 0)</h3>
          <div className="grid grid-cols-3 gap-2">
            <input type="number" placeholder="a" value={quadA} onChange={(e) => setQuadA(e.target.value)} className="border p-2.5 rounded-xl text-center focus:border-blue-500 outline-none" />
            <input type="number" placeholder="b" value={quadB} onChange={(e) => setQuadB(e.target.value)} className="border p-2.5 rounded-xl text-center focus:border-blue-500 outline-none" />
            <input type="number" placeholder="c" value={quadC} onChange={(e) => setQuadC(e.target.value)} className="border p-2.5 rounded-xl text-center focus:border-blue-500 outline-none" />
          </div>
          <button onClick={handleQuadratic} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700">Solve Roots</button>
          {roots && <div className="p-3 bg-emerald-50 text-emerald-700 font-mono rounded-xl text-center border border-emerald-100">{roots}</div>}
        </div>
      )}

      {/* 🥞 TAB 4: DECIMAL TO FRACTION */}
      {activeTab === 'decToFrac' && (
        <div className="space-y-4 max-w-sm mx-auto py-4">
          <h3 className="text-lg font-bold text-slate-800">Convert Decimal to Fraction</h3>
          <input type="number" step="any" placeholder="e.g., 0.75" value={decimalInput} onChange={(e) => setDecimalInput(e.target.value)} className="w-full border p-2.5 rounded-xl outline-none focus:border-blue-500" />
          <button onClick={() => setFractionResult(decimalToFraction(decimalInput))} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700">Convert</button>
          {fractionResult && <div className="p-3 bg-indigo-50 text-indigo-700 font-mono rounded-xl text-center border border-indigo-100">Fraction = {fractionResult}</div>}
        </div>
      )}

      {/* 🔢 TAB 5: GCD & LCM SOLVER */}
      {activeTab === 'gcdLcm' && (
        <div className="space-y-4 max-w-sm mx-auto py-4">
          <h3 className="text-lg font-bold text-slate-800">Find GCD & LCM Factors</h3>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" placeholder="Number 1" value={num1} onChange={(e) => setNum1(e.target.value)} className="border p-2.5 rounded-xl text-center focus:border-blue-500 outline-none" />
            <input type="number" placeholder="Number 2" value={num2} onChange={(e) => setNum2(e.target.value)} className="border p-2.5 rounded-xl text-center focus:border-blue-500 outline-none" />
          </div>
          <button onClick={() => setFactorsResult({ gcd: gcd(num1, num2), lcm: lcm(num1, num2) })} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700">Calculate</button>
          {factorsResult.gcd !== null && (
            <div className="space-y-2">
              <div className="p-2.5 bg-emerald-50 text-emerald-700 font-mono rounded-xl text-center border border-emerald-100">GCD = {factorsResult.gcd}</div>
              <div className="p-2.5 bg-teal-50 text-teal-700 font-mono rounded-xl text-center border border-teal-100">LCM = {factorsResult.lcm}</div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
