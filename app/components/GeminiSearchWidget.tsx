'use client';

import { useState, FormEvent } from 'react';

interface HomeResult {
  id: string;
  address: string;
  city?: string;
  state?: string;
  zip?: string;
  price?: number;
  beds?: number;
  baths?: number;
  homeType?: string;
  url?: string;
  short_reason?: string;
}

interface Props {
  lang?: string;
}

export default function GeminiSearchWidget({ lang = 'es' }: Props) {
  const isEnglish = lang === 'en';
  const [county, setCounty] = useState('Gwinnett');
  const [city, setCity] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [bedsMin, setBedsMin] = useState('3');
  const [bathsMin, setBathsMin] = useState('2');
  const [loading, setLoading] = useState(false);
  const [homes, setHomes] = useState<HomeResult[]>([]);
  const [error, setError] = useState('');

  const counties = ['Gwinnett', 'Cobb', 'Whitfield', 'Hall', 'DeKalb', 'Clayton'];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setHomes([]);
    try {
      const res = await fetch('/api/home-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          county,
          city,
          priceMin: priceMin ? Number(priceMin) : undefined,
          priceMax: priceMax ? Number(priceMax) : undefined,
          bedsMin: bedsMin ? Number(bedsMin) : undefined,
          bathsMin: bathsMin ? Number(bathsMin) : undefined,
          language: isEnglish ? 'en' : 'es',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || (isEnglish ? 'Search failed. Please try again.' : 'Busqueda fallida. Intentalo de nuevo.'));
      } else {
        setHomes(data.homes || []);
      }
    } catch {
      setError(isEnglish ? 'Network error. Please try again.' : 'Error de red. Intentalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '900px',
    margin: '24px auto 0',
    textAlign: 'left',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '10px',
    marginTop: '10px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '0.9rem',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#e5e7eb',
    marginBottom: '4px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
  };

  const btnStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '999px',
    border: 'none',
    background: loading ? '#9ca3af' : '#f59e0b',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: loading ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '14px',
  };

  const cardStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '12px',
    padding: '14px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#1a202c',
    textDecoration: 'none',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '12px' }}>
        <span style={{ fontSize: '1.3rem' }}>&#x2728;</span>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginLeft: '8px' }}>
          {isEnglish ? 'AI Home Finder' : 'Buscador de Casas con IA'}
        </span>
        <span style={{ marginLeft: '10px', background: '#f59e0b', color: '#fff', borderRadius: '20px', padding: '2px 10px', fontSize: '0.7rem', fontWeight: 700, verticalAlign: 'middle' }}>
          Gemini + Zillow
        </span>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '8px' }}>
        {isEnglish
          ? 'Narrow down homes in Georgia Latino communities by budget, county, city, bedrooms and bathrooms.'
          : 'Filtra casas en comunidades Latinas de Georgia por presupuesto, condado, ciudad, recamaras y banos.'}
      </p>

      <form onSubmit={handleSubmit}>
        <div style={gridStyle}>
          <div>
            <label style={labelStyle}>{isEnglish ? 'County' : 'Condado'}</label>
            <select value={county} onChange={(e) => setCounty(e.target.value)} style={inputStyle} disabled={loading}>
              {counties.map((c) => (
                <option key={c} value={c}>{c} County</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>{isEnglish ? 'City (optional)' : 'Ciudad (opcional)'}</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={isEnglish ? 'e.g. Norcross' : 'ej. Norcross'}
              style={inputStyle}
              disabled={loading}
            />
          </div>
          <div>
            <label style={labelStyle}>{isEnglish ? 'Min price ($)' : 'Precio minimo ($)'}</label>
            <input
              type="number"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              style={inputStyle}
              disabled={loading}
            />
          </div>
          <div>
            <label style={labelStyle}>{isEnglish ? 'Max price ($)' : 'Precio maximo ($)'}</label>
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              style={inputStyle}
              disabled={loading}
            />
          </div>
          <div>
            <label style={labelStyle}>{isEnglish ? 'Min bedrooms' : 'Minimo recamaras'}</label>
            <input
              type="number"
              value={bedsMin}
              onChange={(e) => setBedsMin(e.target.value)}
              style={inputStyle}
              disabled={loading}
            />
          </div>
          <div>
            <label style={labelStyle}>{isEnglish ? 'Min bathrooms' : 'Minimo banos'}</label>
            <input
              type="number"
              value={bathsMin}
              onChange={(e) => setBathsMin(e.target.value)}
              style={inputStyle}
              disabled={loading}
            />
          </div>
        </div>

        <button type="submit" style={btnStyle} disabled={loading}>
          {loading ? (
            <>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              {isEnglish ? 'Searching...' : 'Buscando...'}
            </>
          ) : (
            <>
              <span>&#x1F50D;</span>
              {isEnglish ? 'Find homes' : 'Buscar casas'}
            </>
          )}
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '16px', color: '#fca5a5', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      {homes.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 600 }}>
            {isEnglish ? `${homes.length} homes found:` : `${homes.length} casas encontradas:`}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {homes.map((home) => (
              <a key={home.id} href={home.url} target="_blank" rel="noopener noreferrer" style={cardStyle}>
                <h4 style={{ color: '#1e3a8a', margin: '0 0 6px', fontSize: '0.95rem' }}>{home.address}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: '0 0 4px' }}>
                  {[home.city, home.state, home.zip].filter(Boolean).join(', ')}
                </p>
                <p style={{ color: '#16a34a', fontWeight: 'bold', margin: '0 0 4px' }}>
                  {home.price
                    ? home.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
                    : isEnglish ? 'See price' : 'Ver precio'}
                </p>
                {(home.beds || home.baths) && (
                  <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: '0 0 4px' }}>
                    {home.beds && `${home.beds} ${isEnglish ? 'bed' : 'recamaras'}`}
                    {home.beds && home.baths && ' - '}
                    {home.baths && `${home.baths} ${isEnglish ? 'bath' : 'banos'}`}
                  </p>
                )}
                {home.short_reason && (
                  <p style={{ color: '#4b5563', fontSize: '0.8rem', marginTop: '4px' }}>{home.short_reason}</p>
                )}
                <p style={{ marginTop: '6px', color: '#1d4ed8', fontSize: '0.75rem', textDecoration: 'underline' }}>
                  {isEnglish ? 'View details on Zillow' : 'Ver detalles en Zillow'}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
