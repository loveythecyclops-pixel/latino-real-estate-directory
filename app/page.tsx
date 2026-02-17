import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        Georgia Latino Real Estate Directory
      </h1>
      <Link href="/legal-support" style={{
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        Legal Support
      </Link>
    </main>
  );
}
