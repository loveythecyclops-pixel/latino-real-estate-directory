'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Link href="/rentals" style={{ color: '#1e3a8a', fontWeight: 'bold', textDecoration: 'none' }}>← Back to Dashboard</Link>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginTop: '20px' }}>
        <h1 style={{ color: '#1e3a8a', margin: '0 0 20px 0' }}>Northeast Mountains: 2026 Analytics</h1>
        <p style={{ fontSize: '1.2rem' }}><strong>Average Rent:</strong> <span style={{ color: '#059669' }}>,827</span></p>
        <p style={{ fontSize: '1.2rem' }}><strong>Rent Burden:</strong> 65%</p>
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Affordability Visualization:</p>
          <div style={{ height: '12px', width: '100%', background: '#e5e7eb', borderRadius: '6px', overflow: 'hidden', marginTop: '8px' }}>
            <div style={{ height: '100%', width: '65%', background: '#f59e0b' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
