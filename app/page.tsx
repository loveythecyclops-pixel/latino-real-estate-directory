import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Latino Real Estate Directory</h1>
      <div className="flex gap-4">
        <Link href="/legal-support">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Legal Support
          </Button>
        </Link>
      </div>
    </main>
  );
}
