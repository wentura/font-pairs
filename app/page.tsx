import { fontPairs } from './data/fonts';
import FontCard from './components/FontCard';

export default function Home() {
  // Get unique categories
  const allCategories = Array.from(new Set(fontPairs.map(pair => pair.category).filter(Boolean))) as string[];
  
  // Count pairs per category
  const categoryCounts: Record<string, number> = {};
  allCategories.forEach(category => {
    categoryCounts[category] = fontPairs.filter(pair => pair.category === category).length;
  });

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Google Font Pairs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Discover beautiful typography combinations. Each pair showcases a heading font 
          with a complementary paragraph font. All fonts are optimized with Next.js.
        </p>
        
        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Font categories">
          {allCategories.map((category) => (
            <a 
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {category} <span className="text-gray-500">({categoryCounts[category]})</span>
            </a>
          ))}
        </nav>
        
        <div className="text-sm text-gray-500">
          {fontPairs.length} font pairs total
        </div>
      </header>
      
      {/* Font Pairs Grid */}
      <div className="space-y-8">
        {fontPairs.map((pair, index) => (
          <FontCard 
            key={pair.id || index}
            pair={pair}
            index={index}
          />
        ))}
      </div>
      
      <footer className="mt-16 text-center text-sm text-gray-500 py-8">
        <p>Showcasing {fontPairs.length} Google Font pairs with Next.js optimization</p>
        <p className="mt-2">
          Font pairs sourced from Google Fonts, Pagecloud, Figma, and Designed by Harj
        </p>
      </footer>
    </main>
  );
}
