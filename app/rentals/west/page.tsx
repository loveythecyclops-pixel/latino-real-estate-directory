'use client';
import Link from 'next/link';

export default function RegionalPage() {
  const sectionStyle = { padding: '24px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '24px' };
  return (
    <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Link href="/rentals" style={{ color: '#1e3a8a', fontWeight: 'bold', textDecoration: 'none' }}>← Volver al Panel</Link>
      <h1 style={{ color: '#1e3a8a', marginTop: '24px', fontSize: '2.2rem' }}>West Georgia: Analytics 2026</h1>
      <div style={{ marginTop: '30px' }}>
        <section style={sectionStyle}>
          <h2>📊 Market Overview</h2>
          <p><strong>Average Rent:</strong> ,225</p>
          <p><strong>Primary Cities:</strong> Columbus</p>
          <p><strong>Market Trend:</strong> <span style={{color: '#92400e', fontWeight: 'bold'}}>Affordable</span></p>
        </section>
        <section style={sectionStyle}>
          <h2>🏘️ Rental Unit Details</h2>
          <p>The inventory in West Georgia consists primarily of single-family rentals and mid-rise apartments.</p>
        </section>
      </div>
    </main>
  );
}
