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
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        Georgia Latino Real Estate Directory
      </h1>
      <a href="/legal-support" style={{
        backgroundColor: 'white',
        color: '#2563eb',
        padding: '15px 30px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        display: 'inline-block'
      }}>
        Legal Support
      </a>
    </main>
  );
}
