export default function GlossaryPage() {
  const terms = [
    { en: "Escrow", es: "Depósito en garantía", desc: "Dinero protegido durante la compra." },
    { en: "Equity", es: "Plusvalía", desc: "El valor real de su casa que ya es suyo." },
    { en: "Appraisal", es: "Avalúo", desc: "El precio oficial que el banco dice que vale la casa." }
  ];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Glosario Bilingüe de Real Estate</h1>
      <div className="space-y-4">
        {terms.map((t) => (
          <div key={t.en} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-blue-700">{t.es} <span className="text-gray-400 text-sm">({t.en})</span></h3>
            <p className="text-gray-600">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
