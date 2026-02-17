import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-600">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Georgia Latino Real Estate Directory
      </h1>
      <div className="flex gap-4">
        <Link 
          href="/legal-support" 
          style={{
            backgroundColor: 'white',
            color: '#2563eb',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          Legal Support
        </Link>
      </div>
    </main>
  );
}
