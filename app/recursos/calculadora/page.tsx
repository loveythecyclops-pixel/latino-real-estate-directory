'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(300000);
  
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: '#1e3a8a', fontWeight: 'bold' }}>← Back to Home</Link>
      <h1 style={{ color: '#1e3a8a', marginTop: '20px' }}>Mortgage Calculator / Calculadora</h1>
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '12px', marginTop: '20px' }}>
        <p>Loan Amount: ${loanAmount.toLocaleString()}</p>
        <input 
          type="range" min="100000" max="1000000" step="10000" 
          value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
          style={{ width: '100%' }}
        />
        <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
          More features coming soon...
        </p>
      </div>
    </main>
  );
}
