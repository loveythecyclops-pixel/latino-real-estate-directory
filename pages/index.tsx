export default function Home() {
  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', minHeight: '100vh', backgroundColor: '#2563eb', 
      color: 'white', fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Georgia Latino Real Estate Directory</h1>
      <a href="/legal-support" style={{
        backgroundColor: 'white', color: '#2563eb', padding: '20px 40px', 
        borderRadius: '12px', fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none'
      }}>
        Legal Support
      </a>
    </div>
  );
}
