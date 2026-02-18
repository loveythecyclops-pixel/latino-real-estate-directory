export default function FinancePage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Empoderamiento Financiero</h1>
      <p className="text-lg text-gray-700 mb-8">Recursos exclusivos para preparar su crédito y capital para su primera casa.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg shadow-sm bg-blue-50">
          <h2 className="text-xl font-bold mb-2">Crédito: Rent-to-Own</h2>
          <p className="text-sm">Reporte sus pagos de renta para subir su puntaje de crédito antes de aplicar a un ITIN Loan.</p>
        </div>
        <div className="border p-6 rounded-lg shadow-sm bg-green-50">
          <h2 className="text-xl font-bold mb-2">Ayuda para el Enganche (DPA)</h2>
          <p className="text-sm">Base de datos de subvenciones locales en Georgia que regalan dinero para su pago inicial.</p>
        </div>
      </div>
    </div>
  );
}
