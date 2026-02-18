import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">Directorio de Real Estate Latino</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">Conectando a la comunidad con expertos bilingües en préstamos, leyes y vivienda.</p>
        <div className="flex justify-center gap-4">
           <Link href="/hubs" className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold">Find a Home</Link>
           <Link href="/recursos/calculadora" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">Calculadora Bilingüe</Link>
        </div>
      </div>

      {/* Resources Hub */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">Empoderamiento y Recursos</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-blue-600">
              <h3 className="font-bold mb-2">Crédito y Finanzas</h3>
              <Link href="/recursos/finanzas" className="text-blue-600 text-sm font-semibold">Ver recursos ?</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-green-600">
              <h3 className="font-bold mb-2">Calculadora de Pago</h3>
              <Link href="/recursos/calculadora" className="text-green-600 text-sm font-semibold">Calcular Ahora ?</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-blue-600">
              <h3 className="font-bold mb-2">Glosario Bilingüe</h3>
              <Link href="/recursos/herramientas" className="text-blue-600 text-sm font-semibold">Ver Diccionario ?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Footer area */}
      <div className="py-10 text-center">
        <Link href="/lenders" className="text-blue-900 underline px-4">Lenders</Link>
        <Link href="/legal-support" className="text-blue-900 underline px-4">Legal Support</Link>
      </div>
    </main>
  );
}
