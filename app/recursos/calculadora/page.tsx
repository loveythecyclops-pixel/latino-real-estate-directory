'use client';

import { useState } from 'react';

export default function Calculadora() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [price, setPrice] = useState(300000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const isEnglish = language === 'en';

  const monthlyRate = rate / 100 / 12;
  const payments = years * 12;

  const monthlyPayment =
    price *
    (monthlyRate * Math.pow(1 + monthlyRate, payments)) /
    (Math.pow(1 + monthlyRate, payments) - 1);

  return (
    <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <button
        onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
        style={{ float: 'right', marginBottom: '20px' }}
      >
        {isEnglish ? '🇲🇽 Ver en Español' : '🇺🇸 View in English'}
      </button>

      <h1>
        {isEnglish ? 'Bilingual Mortgage Calculator' : 'Calculadora Hipotecaria Bilingüe'}
      </h1>

      <div style={{ marginTop: '30px' }}>
        <label>
          {isEnglish ? 'Home Price ($)' : 'Precio de la Casa ($)'}
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
        />

        <label>
          {isEnglish ? 'Interest Rate (%)' : 'Tasa de Interés (%)'}
        </label>
        <input
          type="number"
          value={rate}
          step="0.1"
          onChange={(e) => setRate(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
        />

        <label>
          {isEnglish ? 'Loan Term (Years)' : 'Plazo del Préstamo (Años)'}
        </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', marginBottom: '30px' }}
        />
      </div>

      <div style={{ background: '#1e3a8a', color: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h2>
          {isEnglish ? 'Estimated Monthly Payment' : 'Pago Mensual Estimado'}
        </h2>
        <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          ${isFinite(monthlyPayment) ? monthlyPayment.toFixed(2) : '0.00'}
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <a href="/" style={{ color: '#1e3a8a' }}>
          {isEnglish ? '← Back to Home' : '← Volver al Inicio'}
        </a>
      </div>
    </main>
  );
}
