'use client';
import Link from 'next/link';

export default function RegionalRentalPage() {
  return (
    <main style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/rentals" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>? Back to Rental Dashboard</Link>
      
      <h1 style={{ color: '#1e3a8a', marginTop: '20px' }}>METRO ATLANTA Rental Analytics 2026</h1>
      
      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        <section style={sectionStyle}>
          <h2>1?? Demographics & Population</h2>
          <p>Loading census data and migration patterns for metro-atlanta...</p>
        </section>

        <section style={sectionStyle}>
          <h2>2?? Unit Types & Sizes</h2>
          <p>Estimated Average Rents: Studio (.2k), 1-Bed (.5k), 2-Bed (.8k+)</p>
        </section>

        <section style={sectionStyle}>
          <h2>3?? Affordability Index</h2>
          <p>Rent-to-Income Ratio: Analyzing local median household income...</p>
          <div style={{ height: '10px', width: '100%', backgroundColor: '#f59e0b', borderRadius: '5px' }}></div>
        </section>
        
        <section style={sectionStyle}>
          <h2>6?? Investment & Opportunity</h2>
          <p>Cap Rate Estimates: Data pending local market yield analysis.</p>
        </section>
      </div>
    </main>
  );
}

const sectionStyle = { padding: '20px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };
