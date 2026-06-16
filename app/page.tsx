"use client";

import { useState } from 'react';
import { fontPairs } from './data/fonts';
import FontCard from './components/FontCard';
import ThemeToggle from './components/ThemeToggle';

const PAIRS_PER_PAGE = 10;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get unique categories
  const allCategories = Array.from(new Set(fontPairs.map(pair => pair.category).filter(Boolean))) as string[];
  
  // Count pairs per category
  const categoryCounts: Record<string, number> = {};
  allCategories.forEach(category => {
    categoryCounts[category] = fontPairs.filter(pair => pair.category === category).length;
  });

  // Pagination logic
  const totalPages = Math.ceil(fontPairs.length / PAIRS_PER_PAGE);
  const startIndex = (currentPage - 1) * PAIRS_PER_PAGE;
  const endIndex = startIndex + PAIRS_PER_PAGE;
  const currentPairs = fontPairs.slice(startIndex, endIndex);

  // Go to page
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {allCategories.map((category) => (
            <a 
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {category} <span className="text-gray-600 dark:text-gray-400">({categoryCounts[category]})</span>
            </a>
          ))}
        </nav>
        
        <div className="text-sm text-gray-700 dark:text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, fontPairs.length)} of {fontPairs.length} font pairs
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
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
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
                  currentPage === page
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                    : 'border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
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
