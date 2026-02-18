import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Georgia Latino Real Estate Directory | ITIN Mortgages & Bilingual Agents',
  description: 'The #1 directory connecting the Georgia Latino community with ITIN mortgage experts, owner financing, and bilingual real estate agents. Serving Woodstock, Gwinnett, Cobb, and more.',
  keywords: 'ITIN Loans Georgia, Agentes de Bienes Raíces Bilingües, Owner Financing GA, Latino Real Estate Georgia, Prestamos con ITIN',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
