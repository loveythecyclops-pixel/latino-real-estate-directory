'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CobbPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Cobb County Real Estate</h1>
      <p>Bilingual services coming soon.</p>
      <Link href="/" style={{ color: '#1e3a8a', fontWeight: 'bold' }}>
        ← Volver al Inicio / Back to Home
      </Link>
    </div>
  );
}