"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; // Optional: npm i use-debounce

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // This function waits 300ms after the user stops typing to update the URL
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by city, county, or title..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        style={{
          width: '100%',
          padding: '12px 20px',
          borderRadius: '8px',
          border: '1px solid #1e3a8a',
          fontSize: '1rem'
        }}
      />
    </div>
  );
}
