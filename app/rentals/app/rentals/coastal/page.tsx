'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/rentals" style={{ color: '#1e3a8a', fontWeight: 'bold' }}>← Volver</Link>
      <h1 style={{ color: '#1e3a8a', marginTop: '20px' }}>Coastal Georgia: Analytics 2026</h1>
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', marginTop: '20px' }}>
        <p><strong>Renta Promedio:</strong> ,741</p>
        <p><strong>Carga de Asequibilidad:</strong> 60%</p>
        <div style={{ height: '10px', width: '100%', background: '#eee', borderRadius: '5px', marginTop: '10px' }}>
          <div style={{ height: '100%', width: '60%', background: '#f59e0b', borderRadius: '5px' }}></div>
        </div>
      </div>
    </main>
  );
}
