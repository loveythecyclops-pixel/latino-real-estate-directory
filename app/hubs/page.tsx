'use client';
import { useState } from 'react';
import Link from 'next/link';

const hubs = [
  {
    slug: 'gwinnett',
    name: 'Gwinnett County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '🏙️',
    pop: '220,000+',
    latinoPct: '23-25%',
    tagline: { en: 'The largest Latino hub in Georgia', es: 'El centro latino m\u00e1s grande de Georgia' },
    color: '#2563eb',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Gwinnett-County_GA',
  },
  {
    slug: 'cobb',
    name: 'Cobb County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '🌆',
    pop: '111,000+',
    latinoPct: '13-15%',
    tagline: { en: 'Growing communities in Smyrna, Marietta & Austell', es: 'Comunidades en crecimiento en Smyrna, Marietta y Austell' },
    color: '#059669',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Cobb-County_GA',
  },
  {
    slug: 'dekalb',
    name: 'DeKalb County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '🏡',
    pop: '80,000+',
    latinoPct: '11-13%',
    tagline: { en: 'Diverse urban neighborhoods near Atlanta', es: 'Barrios urbanos diversos cerca de Atlanta' },
    color: '#dc2626',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/DeKalb-County_GA',
  },
  {
    slug: 'hall',
    name: 'Hall County',
    region: { en: 'North Georgia', es: 'Norte de Georgia' },
    emoji: '🌲',
    pop: '50,000+',
    latinoPct: '20-22%',
    tagline: { en: 'Gainesville - the poultry capital with deep Latino roots', es: 'Gainesville - la capital avicola con ra\u00edces latinas profundas' },
    color: '#7c3aed',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Hall-County_GA',
  },
  {
    slug: 'whitfield',
    name: 'Whitfield County',
    region: { en: 'North Georgia', es: 'Norte de Georgia' },
    emoji: '🏭',
    pop: '25,000+',
    latinoPct: '30-35%',
    tagline: { en: 'Dalton - the carpet capital with a thriving Latino workforce', es: 'Dalton - la capital de la alfombra con una floreciente fuerza laboral latina' },
    color: '#b45309',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Whitfield-County_GA',
  },
  {
    slug: 'clayton',
    name: 'Clayton County',
    region: { en: 'Metro Atlanta', es: 'Metro Atlanta' },
    emoji: '✈️',
    pop: '45,000+',
    latinoPct: '15-18%',
    tagline: { en: 'Diverse south metro with affordable housing near the airport', es: 'Sur metropolitano diverso con viviendas asequibles cerca del aeropuerto' },
    color: '#0891b2',
    realtorUrl: 'https://www.realtor.com/realestateandhomes-search/Clayton-County_GA',
  },
];

export default function HubsPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {lang === 'en' ? 'Latino Real Estate Hubs' : 'Centros Inmobiliarios Latinos'}
            </h1>
            <p className="mt-1 text-gray-500">
              {lang === 'en'
                ? 'Explore top Latino communities across Georgia'
                : 'Explora las principales comunidades latinas en Georgia'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                lang === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Hub Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/hubs/${hub.slug}`}
              className="group block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="h-2"
                style={{ backgroundColor: hub.color }}
              />
              <div className="p-6">
                <div className="text-4xl mb-3">{hub.emoji}</div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {hub.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {lang === 'en' ? hub.region.en : hub.region.es}
                </p>
                <p className="mt-3 text-gray-700 text-sm">
                  {lang === 'en' ? hub.tagline.en : hub.tagline.es}
                </p>
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="text-gray-600">
                    <span className="font-semibold">{hub.pop}</span>{' '}
                    {lang === 'en' ? 'Latinos' : 'Latinos'}
                  </span>
                  <span className="text-gray-600">
                    <span className="font-semibold">{hub.latinoPct}</span>{' '}
                    {lang === 'en' ? 'of population' : 'de la poblaci\u00f3n'}
                  </span>
                </div>
                <div className="mt-4">
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: hub.color + '20', color: hub.color }}
                  >
                    {lang === 'en' ? 'View Hub' : 'Ver Centro'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
