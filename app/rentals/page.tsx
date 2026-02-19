'use client';

import { useState } from 'react';
import Link from 'next/link';

// 1. DATA: All your 2026 rental facts in one place
const rentalData = {
  atlanta: {
    name: 'Atlanta',
    avgRent: '$1,613',
    oneBed: '$1,775',
    threeBed: '$2,200+',
    latinos: '6%',
    fact: 'Highest inventory in Georgia with 8,000+ units available.'
  },
  gwinnett: {
    name: 'Gwinnett County',
    avgRent: '$1,950',
    oneBed: '$1,678',
    threeBed: '$2,542',
    latinos: '23%',
    fact: 'Best for families; Sugar Hill and Norcross are top Latino hubs.'
  },
  gainesville: {
    name: 'Gainesville',
    avgRent: '$1,316',
    oneBed: '$1,316',
    threeBed: '$1,941',
    latinos: '29%',
    fact: 'Renter-heavy market (59% of residents) with high demand.'
  },
  dalton: {
    name: 'Dalton',
    avgRent: '$1,300',
    oneBed: '$1,455',
    threeBed: '$1,655',
    latinos: '35%',
    fact: 'Most affordable industrial hub; rents dropped $300 this year.'
  }
};

export default function RentalsPage() {
  // 2. STATE: Track which city the user is looking at
  const [selectedCity, setSelectedCity] = useState<keyof typeof rentalData | null>(null);

  const cardStyle = {
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    border: '1px solid #e2e8f0',
    textAlign: 'center' as const
  };

  return (
    <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
      
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', margin: '20px 0' }}>
        {selectedCity ? `${rentalData[selectedCity].name} Market` : 'Select a City for Rental Facts'}
      </h1>

      {/* 3. CITY SELECTION GRID (Shows only if no city is selected) */}
      {!selectedCity ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {(Object.keys(rentalData) as Array<keyof typeof rentalData>).map((key) => (
            <div key={key} onClick={() => setSelectedCity(key)} style={cardStyle}>
              <h3 style={{ color: '#1e3a8a' }}>{rentalData[key].name}</h3>
              <p>Avg: {rentalData[key].avgRent}</p>
              <button style={{ backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
                View Facts
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* 4. DYNAMIC DETAILS VIEW (Shows when a city is clicked) */
        <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '15px', border: '2px solid #1e3a8a' }}>
          <button onClick={() => setSelectedCity(null)} style={{ marginBottom: '20px', cursor: 'pointer' }}>View All Cities</button>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p><strong>Average Rent:</strong> {rentalData[selectedCity].avgRent}</p>
              <p><strong>1-Bedroom:</strong> {rentalData[selectedCity].oneBed}</p>
              <p><strong>3-Bedroom:</strong> {rentalData[selectedCity].threeBed}</p>
            </div>
            <div>
              <p><strong>Latino Population:</strong> {rentalData[selectedCity].latinos}</p>
              <p><strong>Market Insight:</strong> {rentalData[selectedCity].fact}</p>
            </div>
          </div>
          
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e0f2fe', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Pro-Tip for {rentalData[selectedCity].name}:</p>
            <p style={{ margin: 0 }}>Look for "ITIN friendly" labels in our directory for easier approval in this area.</p>
          </div>
        </div>
      )}
    </main>
  );
}
