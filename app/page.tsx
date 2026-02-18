import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' }}>
      {/* Blue Hero Section */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Directorio de Real Estate Latino</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>Recursos y expertos bilingües para la comunidad de Georgia.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/hubs" style={{ backgroundColor: '#ffffff', color: '#1e3a8a', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            Find a Home
          </Link>
          <Link href="/recursos/calculadora" style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            Calculadora Bilingüe
          </Link>
        </div>
      </div>

      {/* Empowerment Hub */}
      <section style={{ padding: '64px 24px', textAlign: 'center', backgroundColor: '#f9fafb' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '3rem' }}>Empoderamiento y Recursos</h2>
        <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', borderTop: '4px solid #16a34a' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Calculadora de Pago</h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Estime su pago mensual incluyendo impuestos y seguro de manera sencilla.</p>
          <Link href="/recursos/calculadora" style={{ display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', padding: '10px 24px', borderRadius: '9999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.875rem' }}>
            Calcular Ahora →
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <footer style={{ padding: '48px 24px', borderTop: '1
git add .
git commit -m "FIX: Restored styling and fixed module export error"
git push origin main

cd C:\Users\ramee\latino-real-estate-directory

 = @"
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', color: '#1a202c' }}>
      {/* Blue Hero Section */}
      <div style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Directorio de Real Estate Latino</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>Recursos y expertos bilingües para la comunidad de Georgia.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/hubs" style={{ backgroundColor: '#ffffff', color: '#1e3a8a', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            Find a Home
          </Link>
          <Link href="/recursos/calculadora" style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            Calculadora Bilingüe
          </Link>
        </div>
      </div>

      {/* Empowerment Hub */}
      <section style={{ padding: '64px 24px', textAlign: 'center', backgroundColor: '#f9fafb' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '3rem' }}>Empoderamiento y Recursos</h2>
        <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', borderTop: '4px solid #16a34a' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Calculadora de Pago</h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Estime su pago mensual incluyendo impuestos y seguro de manera sencilla.</p>
          <Link href="/recursos/calculadora" style={{ display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', padding: '10px 24px', borderRadius: '9999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.875rem' }}>
            Calcular Ahora →
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <Link href="/lenders" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none' }}>Lenders</Link>
          <Link href="/legal-support" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none' }}>Legal Support</Link>
        </div>
      </footer>
    </main>
  );
}