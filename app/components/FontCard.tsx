// FontCard component - displays a single font pair
// Uses CSS variables for font families defined in globals.css
// Fonts are loaded via next/font/google in layout.tsx and applied via CSS variables

interface FontInfo {
  name: string;
  fontFamily: string;
  weight: number;
}

interface FontPair {
  id: string;
  heading: FontInfo;
  paragraph: FontInfo;
  category?: string;
}

interface FontCardProps {
  pair: FontPair;
  index: number;
}

// Map font family names to CSS variable names
const fontVariableMap: Record<string, string> = {
  // Original fonts
  'Montserrat': 'var(--font-montserrat)',
  'Roboto': 'var(--font-roboto)',
  'Playfair Display': 'var(--font-playfair-display)',
  'Lora': 'var(--font-lora)',
  'Lato': 'var(--font-lato)',
  'Poppins': 'var(--font-poppins)',
  'Source Sans Pro': 'var(--font-source-sans-pro)',
  'Oswald': 'var(--font-oswald)',
  'Merriweather': 'var(--font-merriweather)',
  'Raleway': 'var(--font-raleway)',
  'Fira Sans': 'var(--font-fira-sans)',
  'Tinos': 'var(--font-tinos)',
  'Ubuntu': 'var(--font-ubuntu)',
  'Bitter': 'var(--font-bitter)',
  'PT Sans': 'var(--font-pt-sans)',
  'PT Serif': 'var(--font-pt-serif)',
  
  // New fonts - Classic
  'Quattrocento': 'var(--font-quattrocento)',
  'Quattrocento Sans': 'var(--font-quattrocento-sans)',
  'Libre Baskerville': 'var(--font-libre-baskerville)',
  'EB Garamond': 'var(--font-eb-garamond)',
  'Proza Libre': 'var(--font-proza-libre)',
  
  // New fonts - Elegant
  'Cinzel': 'var(--font-cinzel)',
  'Fauna One': 'var(--font-fauna-one)',
  'Yeseva One': 'var(--font-yeseva-one)',
  'Josefin Sans': 'var(--font-josefin-sans)',
  'Spectral': 'var(--font-spectral)',
  'DM Serif Display': 'var(--font-dm-serif-display)',
  
  // New fonts - Modern
  'Nunito': 'var(--font-nunito)',
  'Quicksand': 'var(--font-quicksand)',
  'Work Sans': 'var(--font-work-sans)',
  'Roboto Slab': 'var(--font-robot-slab)',
  
  // New fonts - Creative
  'Abril Fatface': 'var(--font-abril-fatface)',
  'Inconsolata': 'var(--font-inconsolata)',
  'Arvo': 'var(--font-arvo)',
  'Philosopher': 'var(--font-philosopher)',
  'Inter': 'var(--font-inter)',
  'Unica One': 'var(--font-unica-one)',
  'Crimson Text': 'var(--font-crimson-text)',
  
  // New fonts - Minimalist
  'Source Serif Pro': 'var(--font-source-serif-pro)',
  'Cantarell': 'var(--font-cantarell)',
  'Cabin': 'var(--font-cabin)',
  'Karla': 'var(--font-karla)',
};

const getFontVariable = (fontFamily: string): string => {
  return fontVariableMap[fontFamily] || fontFamily;
};

export default function FontCard({ pair, index }: FontCardProps) {
  const { heading, paragraph, id, category } = pair;

  const headingFontVar = getFontVariable(heading.fontFamily);
  const paragraphFontVar = getFontVariable(paragraph.fontFamily);

  // Category colors for visual distinction
  const categoryColors: Record<string, string> = {
    Classic: 'bg-amber-50 border-amber-200 text-amber-700',
    Elegant: 'bg-purple-50 border-purple-200 text-purple-700',
    Modern: 'bg-blue-50 border-blue-200 text-blue-700',
    Creative: 'bg-green-50 border-green-200 text-green-700',
    Minimalist: 'bg-gray-50 border-gray-200 text-gray-700',
  };
  
  const categoryClass = category ? categoryColors[category] || 'bg-gray-50 border-gray-200 text-gray-700' : 'bg-gray-50 border-gray-200 text-gray-700';

  return (
    <article 
      className="p-8 bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
      aria-labelledby={`font-pair-${id}-title`}
    >
      {/* Category badge */}
      {category && (
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryClass}`}>
          {category}
        </div>
      )}
      
      <h2 
        id={`font-pair-${id}-title`}
        className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-gray-900"
        style={{
          fontFamily: headingFontVar,
          fontWeight: heading.weight,
        }}
      >
        {heading.name}
      </h2>
      <p 
        className="text-base md:text-lg text-gray-700 leading-relaxed"
        style={{
          fontFamily: paragraphFontVar,
          fontWeight: paragraph.weight,
        }}
      >
        <span className="font-semibold text-gray-900">{paragraph.name}</span> is Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Optio, et necessitatibus eaque alias sunt enim voluptas a quasi, 
        itaque possimus ratione consectetur? Praesentium, blanditiis possimus minima similique cupiditate 
        incidunt commodi!
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Heading: {heading.fontFamily} ({heading.weight}) | Body: {paragraph.fontFamily} ({paragraph.weight})
        </p>
      </div>
    </article>
  );
}
