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
}

interface FontCardProps {
  pair: FontPair;
  index: number;
}

export default function FontCard({ pair, index }: FontCardProps) {
  const { heading, paragraph, id } = pair;

  // Map font family names to CSS variable names
  const getFontVariable = (fontFamily: string): string => {
    const fontMap: Record<string, string> = {
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
    };
    return fontMap[fontFamily] || fontFamily;
  };

  const headingFontVar = getFontVariable(heading.fontFamily);
  const paragraphFontVar = getFontVariable(paragraph.fontFamily);

  return (
    <article 
      className="p-8 bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
      aria-labelledby={`font-pair-${id}-title`}
    >
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
