"use client";

import { useState } from 'react';
import { fontPairs } from './data/fonts';
import FontCard from './components/FontCard';
import ThemeToggle from './components/ThemeToggle';

const PAIRS_PER_PAGE = 10;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const allCategories = Array.from(new Set(fontPairs.map(pair => pair.category).filter(Boolean))) as string[];

  // Count pairs per category
  const categoryCounts: Record<string, number> = {};
  allCategories.forEach(category => {
    categoryCounts[category] = fontPairs.filter(pair => pair.category === category).length;
  });

  const filteredPairs = selectedCategory
    ? fontPairs.filter(pair => pair.category === selectedCategory)
    : fontPairs;

  // Pagination logic
  const totalPages = Math.ceil(filteredPairs.length / PAIRS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const startIndex = (safePage - 1) * PAIRS_PER_PAGE;
  const endIndex = startIndex + PAIRS_PER_PAGE;
  const currentPairs = filteredPairs.slice(startIndex, endIndex);

  const selectCategory = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categoryButtonClass = (isActive: boolean) =>
    `px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
    }`;

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Google Font Pairs
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Discover beautiful typography combinations. Each pair showcases a heading font 
          with a complementary paragraph font. All fonts are optimized with Next.js.
        </p>
        
        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Font categories">
          <button
            type="button"
            onClick={() => selectCategory(null)}
            className={categoryButtonClass(selectedCategory === null)}
            aria-pressed={selectedCategory === null}
          >
            All <span className="text-gray-600 dark:text-gray-400">({fontPairs.length})</span>
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={categoryButtonClass(selectedCategory === category)}
              aria-pressed={selectedCategory === category}
            >
              {category} <span className="text-gray-600 dark:text-gray-400">({categoryCounts[category]})</span>
            </button>
          ))}
        </nav>

        <div className="text-sm text-gray-700 dark:text-gray-400">
          {filteredPairs.length === 0 ? (
            <>No font pairs in this category</>
          ) : (
            <>Showing {startIndex + 1}-{Math.min(endIndex, filteredPairs.length)} of {filteredPairs.length} font pairs</>
          )}
        </div>
      </header>
      
      {/* Font Pairs Grid */}
      <div className="space-y-8">
        {currentPairs.map((pair, index) => (
          <FontCard 
            key={pair.id || index}
            pair={pair}
            index={index}
          />
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav 
          className="mt-12 flex justify-center items-center gap-2" 
          aria-label="Pagination"
        >
          {/* Previous Button */}
          <button
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            Previous
          </button>
          
          {/* Page Numbers */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  safePage === page
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                    : 'border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-label={`Page ${page}`}
                aria-current={safePage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      )}
      
      <footer className="mt-16 text-center text-sm text-gray-700 dark:text-gray-400 py-8">
        <p>Showcasing {fontPairs.length} Google Font pairs with Next.js optimization</p>
        <p className="mt-2">
          Font pairs sourced from Google Fonts, Pagecloud, Figma, and Designed by Harj
        </p>
      </footer>
    </main>
  );
}
