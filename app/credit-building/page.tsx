'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [isEnglish, setIsEnglish] = useState(false);

  const sectionStyle = {
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    marginBottom: '30px'
  };

  return (
    <main style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#f8fafc' }}>
      <button onClick={() => setIsEnglish(!isEnglish)} style={{ float: 'right', padding: '10px' }}>
        {isEnglish ? '🇲🇽 Español' : '🇺🇸 English'}
      </button>
      
      <h1 style={{ color: '#1e3a8a' }}>{isEnglish ? 'Financial & Community Resources' : 'Recursos Financieros y Comunitarios'}</h1>

      {/* SECTION 1: CREDIT BUILDING */}
      <section style={sectionStyle}>
        <h2 style={{ color: '#16a34a' }}>🚀 {isEnglish ? 'Build Your Credit (ITIN Friendly)' : 'Construya su Crédito (Aceptan ITIN)'}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '15px', borderLeft: '4px solid #16a34a', background: '#f0fdf4' }}>
            <h4>{isEnglish ? 'Credit Builder Loans' : 'Préstamos para Crédito'}</h4>
            <p style={{ fontSize: '0.9rem' }}>{isEnglish ? 'Banks hold the loan in savings while you pay, reporting every payment to bureaus.' : 'Los bancos guardan el préstamo en ahorros mientras usted paga, reportando cada pago.'}</p>
          </div>
          <div style={{ padding: '15px', borderLeft: '4px solid #16a34a', background: '#f0fdf4' }}>
            <h4>{isEnglish ? 'Secured ITIN Cards' : 'Tarjetas con Depósito'}</h4>
            <p style={{ fontSize: '0.9rem' }}>{isEnglish ? 'Use your ITIN to get a card. Capital One & Chase are top 2026 options.' : 'Use su ITIN para obtener una tarjeta. Capital One y Chase son las mejores opciones en 2026.'}</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: BILINGUAL ORGANIZATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ color: '#1e3a8a' }}>🤝 {isEnglish ? 'Bilingual Support in Georgia' : 'Apoyo Bilingüe en Georgia'}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <strong>Latino Community Fund (LCF)</strong>
            <p style={{ fontSize: '0.85rem' }}>{isEnglish ? 'Focuses on economic opportunity and "Know Your Rights" in Georgia.' : 'Se enfoca en oportunidades económicas y derechos del inmigrante en Georgia.'}</p>
          </div>
          <div>
            <strong>Latin American Association (LAA)</strong>
            <p style={{ fontSize: '0.85rem' }}>{isEnglish ? 'Centers in Atlanta, Dalton, and Norcross. Free financial workshops.' : 'Centros en Atlanta, Dalton y Norcross. Talleres financieros gratuitos.'}</p>
          </div>
          <div>
            <strong>Catholic Charities</strong>
            <p style={{ fontSize: '0.85rem' }}>{isEnglish ? 'HUD-approved housing counseling in Spanish for future homeowners.' : 'Asesoría de vivienda aprobada por HUD en español para futuros compradores.'}</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>← {isEnglish ? 'Back to Directory' : 'Volver al Directorio'}</Link>
      </footer>
    </main>
  );
}
