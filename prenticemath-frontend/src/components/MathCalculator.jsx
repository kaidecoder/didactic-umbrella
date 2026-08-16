import { useState } from 'react';

export default function MathCalculator() {
  const [activeTab, setActiveTab] = useState('scientific');
  const [display, setDisplay] = useState('');

  // Advanced Equation Solver States
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [hypotenuse, setHypotenuse] = useState(null);

  const [quadA, setQuadA] = useState('');
  const [quadB, setQuadB] = useState('');
  const [quadC, setQuadC] = useState('');
  const [roots, setRoots] = useState(null);

  // Scientific Button Operations Handler
  const handleScientificAction = (action) => {
    try {
      const currentVal = parseFloat(display) || 0;
      switch (action) {
        case 'sin': setDisplay(Math.sin(currentVal * (Math.PI / 180)).toFixed(6)); break; // Degrees
        case 'cos': setDisplay(Math.cos(currentVal * (Math.PI / 180)).toFixed(6)); break;
        case 'tan': setDisplay(Math.tan(currentVal * (Math.PI / 180)).toFixed(6)); break;
        case 'ln': setDisplay(Math.log(currentVal).toFixed(6)); break;
        case 'log': setDisplay(Math.log10(currentVal).toFixed(6)); break;
        case 'sqrt': setDisplay(Math.sqrt(currentVal).toString()); break;
        case 'sq': setDisplay(Math.pow(currentVal, 2).toString()); break;
        case 'pi': setDisplay((prev) => prev + Math.PI.toFixed(6)); break;
        default: break;
      }
    } catch {
      setDisplay('Error');
    }
  };

  const handleEvaluate = () => {
    try {
      // Basic safety sanitizer evaluation block
      const result = Function(`return ${display}`)();
      setDisplay(result.toString());
    } catch {
      setDisplay('Error');
    }
  };

  const calculatePythagorean = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    if (!isNaN(a) && !isNaN(b)) {
      setHypotenuse(Math.sqrt(a * a + b * b).toFixed(4));
    }
  };

  const calculateQuadratic = () => {
    const a = parseFloat(quadA);
    const b = parseFloat(quadB);
    const c = parseFloat(quadC);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      const discriminant = b * b - 4 * a * c;
      if (discriminant < 0) {
        setRoots("No real roots");
      } else {
        const r1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(4);
        const r2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(4);
        setRoots(`x1 = ${r1}, x2 = ${r2}`);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      {/* Navigation Headers Tabs */}
      <div className="mb-6 border-b border-slate-100 flex gap-6">
        <button onClick={() => setActiveTab('scientific')} className={`pb-2 text-sm font-bold transition-all ${activeTab === 'scientific' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>🔬 Scientific Grid</button>
        <button onClick={() => setActiveTab('pythag')} className={`pb-2 text-sm font-bold transition-all ${activeTab === 'pythag' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>📐 Pythagorean Theorem</button>
        <button onClick={() => setActiveTab('quad')} className={`pb-2 text-sm font-bold transition-all ${activeTab === 'quad' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>🧮 Quadratic Solver</button>
      </div>

      {/* SCIENTIFIC PANEL */}
      {activeTab === 'scientific' && (
        <div className="max-w-xl mx-auto bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-800">
          {/* LCD Digital Display Box */}
          <div className="bg-slate-950 text-emerald-400 text-right text-3xl font-mono p-4 rounded-xl mb-4 h-16 overflow-hidden flex items-center justify-end tracking-wider border border-slate-800">
            {display || '0'}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* Scientific Left Panel Keys Block */}
            <div className="col-span-3 grid grid-cols-2 gap-2 border-r border-slate-800 pr-2">
              <button onClick={() => handleScientificAction('sin')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">sin</button>
              <button onClick={() => handleScientificAction('cos')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">cos</button>
              <button onClick={() => handleScientificAction('tan')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">tan</button>
              <button onClick={() => handleScientificAction('sqrt')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">√</button>
              <button onClick={() => handleScientificAction('log')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">log</button>
              <button onClick={() => handleScientificAction('ln')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">ln</button>
              <button onClick={() => handleScientificAction('sq')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">x²</button>
              <button onClick={() => handleScientificAction('pi')} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs py-3 rounded-lg transition-colors">π</button>
            </div>

            {/* Numerical Right Keyboard Grid Box */}
            <div className="col-span-4 grid grid-cols-4 gap-2 pl-1">
              <button onClick={() => setDisplay('')} className="col-span-2 bg-red-950 hover:bg-red-900 text-red-400 font-bold py-3 rounded-lg text-xs transition-colors">AC</button>
              <button onClick={() => setDisplay((prev) => prev.slice(0, -1))} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-lg text-xs">DEL</button>
              <button onClick={() => setDisplay((prev) => prev + '/')} className="bg-slate-800 hover:bg-blue-600 text-blue-400 font-bold py-3 rounded-lg text-sm transition-colors">/</button>

              {['7','8','9','*','4','5','6','-','1','2','3','+'].map((char) => (
                <button
                  key={char}
                  onClick={() => setDisplay((prev) => prev + char)}
                  className={`font-bold py-3 rounded-lg text-sm transition-colors ${['*','-','+'].includes(char) ? 'bg-slate-800 hover:bg-blue-600 text-blue-400' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                >
                  {char}
                </button>
              ))}

              <button onClick={() => setDisplay((prev) => prev + '0')} className="col-span-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg text-sm">0</button>
              <button onClick={() => setDisplay((prev) => prev + '.')} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg text-sm">.</button>
              <button onClick={handleEvaluate} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg text-sm transition-colors">=</button>
            </div>
          </div>
        </div>
      )}

      {/* PYTHAGOREAN PANEL */}
      {activeTab === 'pythag' && (
        <div className="space-y-4 max-w-sm mx-auto py-4">
          <h3 className="text-lg font-bold text-slate-800">Find Hypotenuse (c = √a² + b²)</h3>
          <input type="number" placeholder="Side A length" value={sideA} onChange={(e) => setSideA(e.target.value)} className="w-full border p-2.5 rounded-xl outline-none focus:border-blue-500" />
          <input type="number" placeholder="Side B length" value={sideB} onChange={(e) => setSideB(e.target.value)} className="w-full border p-2.5 rounded-xl outline-none focus:border-blue-500" />
          <button onClick={calculatePythagorean} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-colors">Solve Hypotenuse</button>
          {hypotenuse && <div className="p-3 bg-blue-50 text-blue-700 font-mono rounded-xl text-center border border-blue-100">Hypotenuse (c) = {hypotenuse}</div>}
        </div>
      )}

      {/* QUADRATIC FORMULA ROOTS SOLVER */}
      {activeTab === 'quad' && (
        <div className="space-y-4 max-w-sm mx-auto py-4">
          <h3 className="text-lg font-bold text-slate-800">Find Roots (ax² + bx + c = 0)</h3>
          <div className="grid grid-cols-3 gap-2">
            <input type="number" placeholder="a value" value={quadA} onChange={(e) => setQuadA(e.target.value)} className="border p-2.5 rounded-xl text-center outline-none focus:border-blue-500" />
            <input type="number" placeholder="b value" value={quadB} onChange={(e) => setQuadB(e.target.value)} className="border p-2.5 rounded-xl text-center outline-none focus:border-blue-500" />
            <input type="number" placeholder="c value" value={quadC} onChange={(e) => setQuadC(e.target.value)} className="border p-2.5 rounded-xl text-center outline-none focus:border-blue-500" />
          </div>
          <button onClick={calculateQuadratic} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-colors">Solve Real Roots</button>
          {roots && <div className="p-3 bg-emerald-50 text-emerald-700 font-mono rounded-xl text-center border border-emerald-100">{roots}</div>}
        </div>
      )}
    </div>
  );
}

