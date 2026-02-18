import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Directorio de Real Estate Latino</h1>
        <p className="mb-8">Recursos y expertos bilingües para su próxima casa.</p>
        <div className="flex justify-center gap-4">
          <Link href="/hubs" className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold">Find a Home</Link>
          <Link href="/recursos/calculadora" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Calculadora Bilingüe</Link>
        </div>
      </div>
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Empoderamiento y Recursos</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
           <h3 className="font-bold">Calculadora de Pago</h3>
           <Link href="/recursos/calculadora" className="text-green-600 font-bold block mt-4">Calcular Ahora ?</Link>
        </div>
      </section>
    </main>
  );
}
