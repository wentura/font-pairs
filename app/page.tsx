import { fontPairs } from './data/fonts';
import FontCard from './components/FontCard';

export default function Home() {
  // fontPairs is imported from data/fonts.ts with proper TypeScript types

  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Google Font Pairs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover beautiful typography combinations. Each pair showcases a heading font 
          with a complementary paragraph font.
        </p>
      </header>
      
      <div className="space-y-8">
        {fontPairs.map((pair, index) => (
          <FontCard 
            key={pair.id || index}
            pair={pair}
            index={index}
          />
        ))}
      </div>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>Showcasing Google Fonts with Next.js optimization</p>
      </footer>
    </main>
  );
}
