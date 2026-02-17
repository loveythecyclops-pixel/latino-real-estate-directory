import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1e3a8a', textAlign: 'center' }}>
        Georgia Latino Real Estate Directory
      </h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/legal-support" style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
        }}>
          Legal Support
        </Link>
      </div>
    </main>
  );
}
