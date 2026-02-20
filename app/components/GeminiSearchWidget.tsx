'use client';

import { useState, FormEvent } from 'react';

interface Listing {
  id: string;
  title_en: string | null;
  title_es: string | null;
  description_en: string | null;
  description_es: string | null;
  price: number | null;
  county: string | null;
  itinFriendly: boolean | null;
  images: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
}

interface GeminiSearchResult {
  summary: string;
  suggestions: string[];
  listings: Listing[];
  error?: string;
}

interface Props {
  lang?: string;
}

export default function GeminiSearchWidget({ lang = 'es' }: Props) {
  const isEnglish = lang === 'en';
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeminiSearchResult | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/gemini-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery, lang }),
      });
      const data: GeminiSearchResult = await res.json();
      if (!res.ok) {
        setError(data.error || (isEnglish ? 'Search failed. Please try again.' : 'Busqueda fallida. Intentalo de nuevo.'));
      } else {
        setResult(data);
      }
    } catch {
      setError(isEnglish ? 'Network error. Please try again.' : 'Error de red. Intentalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const containerStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '700px',
    margin: '24px auto 0',
    textAlign: 'left',
  };

  const inputRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  };

  const inputStyle: React.CSSProperties = {
    flex: '1',
    minWidth: '200px',
    padding: '14px 18px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  };

  const btnStyle: React.CSSProperties = {
    padding: '14px 24px',
    borderRadius: '50px',
    border: 'none',
    background: loading ? '#9ca3af' : '#f59e0b',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: loading ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const summaryStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '16px',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '12px',
    color: '#1e3a8a',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  };

  const cardStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#1a202c',
  };

  const labelStyle: React.CSSProperties = {
    display: 'inline-block',
    marginBottom: '8px',
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    opacity: 0.85,
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '12px' }}>
        <span style={{ fontSize: '1.3rem' }}>&#x2728;</span>
        <span style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem', marginLeft: '8px' }}>
          {isEnglish ? 'AI Home Finder' : 'Buscador de Casas con IA'}
        </span>
        <span
          style={{
            marginLeft: '10px',
            background: '#f59e0b',
            color: '#fff',
            borderRadius: '20px',
            padding: '2px 10px',
            fontSize: '0.7rem',
            fontWeight: '700',
            verticalAlign: 'middle',
          }}
        >
          Gemini AI
        </span>
      </div>
      <label style={labelStyle}>
        {isEnglish
          ? 'Describe your dream home in plain language'
          : 'Describe tu casa ideal en lenguaje natural'}
      </label>
      <form onSubmit={handleSubmit}>
        <div style={inputRowStyle}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isEnglish
                ? 'e.g. 3 bedroom home under $300k in Gwinnett with ITIN'
                : 'ej. Casa de 3 cuartos menos de $300k en Gwinnett con ITIN'
            }
            style={inputStyle}
            disabled={loading}
          />
          <button type="submit" style={btnStyle} disabled={loading}>
            {loading ? (
              <>
                <span style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                {isEnglish ? 'Searching...' : 'Buscando...'}
              </>
            ) : (
              <>
                <span>&#x1F50D;</span>
                {isEnglish ? 'Search' : 'Buscar'}
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div style={{ marginTop: '16px', color: '#fca5a5', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      {result && (
        <div>
          <div style={summaryStyle}>
            <strong>&#x1F916; {isEnglish ? 'Gemini says:' : 'Gemini dice:'}</strong>
            <p style={{ margin: '8px 0 0' }}>{result.summary}</p>
          </div>

          {result.suggestions && result.suggestions.length > 0 && (
            <div style={{ marginTop: '12px' }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', marginBottom: '8px' }}>
                {isEnglish ? 'Try asking:' : 'Puedes preguntar:'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {result.suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(s)}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {result.listings && result.listings.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '600' }}>
                {isEnglish
                  ? `${result.listings.length} matching propert${result.listings.length === 1 ? 'y' : 'ies'} found:`
                  : `${result.listings.length} propiedad${result.listings.length === 1 ? '' : 'es'} encontrada${result.listings.length === 1 ? '' : 's'}:`}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {result.listings.map((listing) => (
                  <div key={listing.id} style={cardStyle}>
                    <img
                      src={listing.images || 'https://via.placeholder.com/400x200?text=No+Image'}
                      alt={isEnglish ? listing.title_en || '' : listing.title_es || ''}
                      style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '14px' }}>
                      <h4 style={{ color: '#1e3a8a', margin: '0 0 6px', fontSize: '0.95rem' }}>
                        {isEnglish ? listing.title_en : listing.title_es}
                      </h4>
                      <p style={{ color: '#16a34a', fontWeight: 'bold', margin: '0 0 4px' }}>
                        ${listing.price?.toLocaleString() ?? 'N/A'}
                      </p>
                      {listing.county && (
                        <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: '0 0 4px' }}>
                          {listing.county}
                        </p>
                      )}
                      {(listing.bedrooms || listing.bathrooms) && (
                        <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: '0 0 4px' }}>
                          {listing.bedrooms && `${listing.bedrooms} bed`}
                          {listing.bedrooms && listing.bathrooms && ' · '}
                          {listing.bathrooms && `${listing.bathrooms} bath`}
                        </p>
                      )}
                      {listing.itinFriendly && (
                        <span style={{ color: '#059669', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          ✅ ITIN {isEnglish ? 'Accepted' : 'Aceptado'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.listings && result.listings.length === 0 && (
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              {isEnglish
                ? 'No exact matches found, but you can refine your search using the suggestions above.'
                : 'No se encontraron coincidencias exactas, pero puedes refinar tu búsqueda con las sugerencias de arriba.'}
            </p>
          )}
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
