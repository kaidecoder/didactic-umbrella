import { useState } from 'react';

export default function ReferenceHub() {
  const [activeSheet, setActiveSheet] = useState('formulas');

  // We include your repo name subfolder so GitHub Pages can find it dynamically
  const basePath = '/prenticemath-frontend';

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>📚 PrenticeMath Study Center</h2>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setActiveSheet('formulas')}
          style={{ padding: '10px 20px', background: activeSheet === 'formulas' ? '#007bff' : '#ccc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          High School Formula Sheet
        </button>
        <button
          onClick={() => setActiveSheet('timestables')}
          style={{ padding: '10px 20px', background: activeSheet === 'timestables' ? '#007bff' : '#ccc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Kids Times Tables (1-12)
        </button>
      </div>

      {/* Interactive PDF Viewer Window */}
      <div style={{ width: '100%', height: '750px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe
          src={`${basePath}/${activeSheet === 'formulas' ? 'prenticemath_formula_sheet_v2.pdf' : 'prenticemath_timestables.pdf'}`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Math Reference Sheet"
        />
      </div>
    </div>
  );
}
