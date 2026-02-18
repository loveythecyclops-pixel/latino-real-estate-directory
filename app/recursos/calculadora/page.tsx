import Link from 'next/link';

export default function CalcPage() {
  return (
    <div className="p-10 text-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-blue-900">Calculadora Bilingüe</h1>
      <p className="my-4 text-gray-600">Herramienta en desarrollo para estimar su pago mensual.</p>
      <Link href="/" className="text-blue-600 underline font-semibold">Volver al inicio</Link>
    </div>
  );
}
