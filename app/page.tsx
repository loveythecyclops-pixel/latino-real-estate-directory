import "./globals.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-[#1e3a8a] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Directorio de Real Estate Latino</h1>
        <p className="text-xl mb-8 opacity-90">Recursos y expertos bilingües para la comunidad de Georgia.</p>
        <div className="flex justify-center gap-4">
          <Link href="/hubs" className="bg-white text-[#1e3a8a] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Find a Home
          </Link>
          <Link href="/recursos/calculadora" className="bg-[#16a34a] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#15803d] transition-colors">
            Calculadora Bilingüe
          </Link>
        </div>
      </div>

      {/* Empowerment Hub Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Empoderamiento y Recursos</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-sm mx-auto mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#16a34a]">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Calculadora de Pago</h3>
              <p className="text-gray-500 text-sm mb-6">Estime su pago mensual incluyendo impuestos y seguro de manera sencilla.</p>
              <Link href="/recursos/calculadora" className="inline-block bg-[#16a34a] text-white px-6 py-2 rounded-full font-bold text-sm">
                Calcular Ahora →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Footer */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <div className="flex justify-center gap-8">
          <Link href="/lenders" className="text-[#1e3a8a] font-semibold hover:underline">Lenders</Link>
          <Link href="/legal-support" className="text-[#1e3a8a] font-semibold hover:underline">Legal Support</Link>
        </div>
      </footer>
    </main>
  );
}