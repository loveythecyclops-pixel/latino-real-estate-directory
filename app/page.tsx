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
      backgroundColor: '#2563eb',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Georgia Latino Real Estate Directory
      </h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/legal-support" style={{
          backgroundColor: 'white',
          color: '#2563eb',
          padding: '15px 30px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          Legal Support
        </Link>
      </div>
    </main>
  );
}
