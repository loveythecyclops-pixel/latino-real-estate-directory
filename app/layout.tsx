import type { Metadata } from 'next';
import { LanguageProvider } from './LanguageContext'; // Import the provider

export const metadata: Metadata = {
  title: 'Georgia Latino Real Estate Directory | ITIN Mortgages & Bilingual Agents',
  description: 'The #1 directory connecting the Georgia Latino community with ITIN mortgage experts, owner financing, and bilingual real estate agents.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {/* Wrap everything here */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
