'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DekalbPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <h1>Dekalb Page Coming Soon</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}