import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Existing Hero Section */}
      <div className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Directorio de Real Estate Latino</h1>
        <p className="text-xl max-w-2xl mx-auto">Conectando a la comunidad con expertos bilingües en préstamos, leyes y vivienda.</p>
      </div>

      {/* NEW: Empowerment & Resources Hub */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">Empoderamiento y Recursos</h2>
          <p className="text-gray-600 text-center mb-12">Herramientas diseñadas para que usted compre con confianza y conocimiento.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Finance */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Crédito y Finanzas</h3>
              <p className="text-gray-600 mb-4 text-sm">Aprenda sobre programas de "Rent-to-Own" y cómo usar sus pagos de renta para calificar.</p>
              <Link href="/recursos/finanzas" className="text-blue-600 font-semibold hover:underline">Ver recursos ?</Link>
            </div>

            {/* Card 2: DPA Database */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Ayuda con el Enganche</h3>
              <p className="text-gray-600 mb-4 text-sm">Base de datos de becas y programas (DPA) en Georgia para compradores de primera vez.</p>
              <Link href="/recursos/finanzas" className="text-blue-600 font-semibold hover:underline">Buscar becas ?</Link>
            </div>

            {/* Card 3: Bilingual Glossary */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Glosario Bilingüe</h3>
              <p className="text-gray-600 mb-4 text-sm">Entienda términos como Escrow, Appraisal y Equity explicados en español sencillo.</p>
              <Link href="/recursos/herramientas" className="text-blue-600 font-semibold hover:underline">Diccionario ?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your current content (Directories) */}
      <section className="py-16 px-6 text-center">
        <Link href="/lenders" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg mx-2 mb-4">Ver Prestamistas</Link>
        <Link href="/legal-support" className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg mx-2">Soporte Legal</Link>
      </section>
    </main>
  );
}
