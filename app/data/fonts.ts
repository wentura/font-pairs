// Font pair data - separated for maintainability
// Sources: Google Fonts recommendations, Pagecloud, Figma Google Fonts, Designed by Harj

interface FontInfo {
  name: string;
  fontFamily: string;
  weight: number;
}

interface FontPair {
  id: string;
  heading: FontInfo;
  paragraph: FontInfo;
  category?: string; // Classic, Elegant, Modern, Creative, Minimalist
}

// Original pairs from the project + Curated selection from expert sources
export const fontPairs: FontPair[] = [
  // ===== ORIGINAL PAIRS =====
  {
    id: 'montserrat-roboto',
    heading: { name: "Montserrat", fontFamily: "Montserrat", weight: 800 },
    paragraph: { name: "Roboto", fontFamily: "Roboto", weight: 400 },
    category: "Modern",
  },
  {
    id: 'playfair-open-sans',
    heading: { name: "Playfair Display", fontFamily: "Playfair Display", weight: 800 },
    paragraph: { name: "Open Sans", fontFamily: "Open Sans", weight: 400 },
    category: "Elegant",
  },
  {
    id: 'lora-lato',
    heading: { name: "Lora", fontFamily: "Lora", weight: 700 },
    paragraph: { name: "Lato", fontFamily: "Lato", weight: 400 },
    category: "Elegant",
  },
  {
    id: 'poppins-source-sans',
    heading: { name: "Poppins", fontFamily: "Poppins", weight: 800 },
    paragraph: { name: "Source Sans Pro", fontFamily: "Source Sans Pro", weight: 400 },
    category: "Modern",
  },
  {
    id: 'oswald-merriweather',
    heading: { name: "Oswald", fontFamily: "Oswald", weight: 700 },
    paragraph: { name: "Merriweather", fontFamily: "Merriweather", weight: 400 },
    category: "Classic",
  },
  {
    id: 'raleway-roboto',
    heading: { name: "Raleway", fontFamily: "Raleway", weight: 800 },
    paragraph: { name: "Roboto", fontFamily: "Roboto", weight: 400 },
    category: "Modern",
  },
  {
    id: 'fira-sans-tinos',
    heading: { name: "Fira Sans", fontFamily: "Fira Sans", weight: 800 },
    paragraph: { name: "Tinos", fontFamily: "Tinos", weight: 400 },
    category: "Modern",
  },
  {
    id: 'ubuntu-open-sans',
    heading: { name: "Ubuntu", fontFamily: "Ubuntu", weight: 700 },
    paragraph: { name: "Open Sans", fontFamily: "Open Sans", weight: 400 },
    category: "Modern",
  },
  {
    id: 'bitter-source-sans',
    heading: { name: "Bitter", fontFamily: "Bitter", weight: 800 },
    paragraph: { name: "Source Sans Pro", fontFamily: "Source Sans Pro", weight: 400 },
    category: "Classic",
  },
  {
    id: 'pt-sans-pt-serif',
    heading: { name: "PT Sans", fontFamily: "PT Sans", weight: 700 },
    paragraph: { name: "PT Serif", fontFamily: "PT Serif", weight: 400 },
    category: "Classic",
  },
  
  // ===== CLASSIC STYLE (5 new) =====
  {
    id: 'quattrocento-quattrocento-sans',
    heading: { name: "Quattrocento", fontFamily: "Quattrocento", weight: 700 },
    paragraph: { name: "Quattrocento Sans", fontFamily: "Quattrocento Sans", weight: 400 },
    category: "Classic",
  },
  {
    id: 'fjalla-one-libre-baskerville',
    heading: { name: "Fjalla One", fontFamily: "Fjalla One", weight: 400 },
    paragraph: { name: "Libre Baskerville", fontFamily: "Libre Baskerville", weight: 400 },
    category: "Classic",
  },
  {
    id: 'oswald-eb-garamond',
    heading: { name: "Oswald", fontFamily: "Oswald", weight: 700 },
    paragraph: { name: "EB Garamond", fontFamily: "EB Garamond", weight: 400 },
    category: "Classic",
  },
  {
    id: 'cormorant-garamond-proza-libre',
    heading: { name: "Cormorant Garamond", fontFamily: "Cormorant Garamond", weight: 700 },
    paragraph: { name: "Proza Libre", fontFamily: "Proza Libre", weight: 400 },
    category: "Classic",
  },
  {
    id: 'libre-baskerville-source-sans-pro',
    heading: { name: "Libre Baskerville", fontFamily: "Libre Baskerville", weight: 700 },
    paragraph: { name: "Source Sans Pro", fontFamily: "Source Sans Pro", weight: 400 },
    category: "Classic",
  },
  
  // ===== ELEGANT STYLE (5 new) =====
  {
    id: 'cinzel-fauna-one',
    heading: { name: "Cinzel", fontFamily: "Cinzel", weight: 700 },
    paragraph: { name: "Fauna One", fontFamily: "Fauna One", weight: 400 },
    category: "Elegant",
  },
  {
    id: 'yeseva-one-josefin-sans',
    heading: { name: "Yeseva One", fontFamily: "Yeseva One", weight: 400 },
    paragraph: { name: "Josefin Sans", fontFamily: "Josefin Sans", weight: 400 },
    category: "Elegant",
  },
  {
    id: 'lora-roboto',
    heading: { name: "Lora", fontFamily: "Lora", weight: 700 },
    paragraph: { name: "Roboto", fontFamily: "Roboto", weight: 400 },
    category: "Elegant",
  },
  {
    id: 'spectral-karla',
    heading: { name: "Spectral", fontFamily: "Spectral", weight: 700 },
    paragraph: { name: "Karla", fontFamily: "Karla", weight: 400 },
    category: "Elegant",
  },
  {
    id: 'dm-serif-display-nunito',
    heading: { name: "DM Serif Display", fontFamily: "DM Serif Display", weight: 400 },
    paragraph: { name: "Nunito", fontFamily: "Nunito", weight: 400 },
    category: "Elegant",
  },
  
  // ===== MODERN STYLE (5 new) =====
  {
    id: 'poppins-merriweather',
    heading: { name: "Poppins", fontFamily: "Poppins", weight: 700 },
    paragraph: { name: "Merriweather", fontFamily: "Merriweather", weight: 400 },
    category: "Modern",
  },
  {
    id: 'roboto-nunito',
    heading: { name: "Roboto", fontFamily: "Roboto", weight: 700 },
    paragraph: { name: "Nunito", fontFamily: "Nunito", weight: 400 },
    category: "Modern",
  },
  {
    id: 'quicksand-quicksand',
    heading: { name: "Quicksand", fontFamily: "Quicksand", weight: 700 },
    paragraph: { name: "Quicksand", fontFamily: "Quicksand", weight: 400 },
    category: "Modern",
  },
  {
    id: 'work-sans-open-sans',
    heading: { name: "Work Sans", fontFamily: "Work Sans", weight: 700 },
    paragraph: { name: "Open Sans", fontFamily: "Open Sans", weight: 400 },
    category: "Modern",
  },
  {
    id: 'roboto-robot-slab',
    heading: { name: "Roboto", fontFamily: "Roboto", weight: 700 },
    paragraph: { name: "Roboto Slab", fontFamily: "Roboto Slab", weight: 400 },
    category: "Modern",
  },
  
  // ===== CREATIVE STYLE (5 new) =====
  {
    id: 'abril-fatface-poppins',
    heading: { name: "Abril Fatface", fontFamily: "Abril Fatface", weight: 400 },
    paragraph: { name: "Poppins", fontFamily: "Poppins", weight: 400 },
    category: "Creative",
  },
  {
    id: 'karla-inconsolata',
    heading: { name: "Karla", fontFamily: "Karla", weight: 700 },
    paragraph: { name: "Inconsolata", fontFamily: "Inconsolata", weight: 400 },
    category: "Creative",
  },
  {
    id: 'arvo-lato',
    heading: { name: "Arvo", fontFamily: "Arvo", weight: 700 },
    paragraph: { name: "Lato", fontFamily: "Lato", weight: 400 },
    category: "Creative",
  },
  {
    id: 'philosopher-inter',
    heading: { name: "Philosopher", fontFamily: "Philosopher", weight: 700 },
    paragraph: { name: "Inter", fontFamily: "Inter", weight: 400 },
    category: "Creative",
  },
  {
    id: 'unica-one-crimson-text',
    heading: { name: "Unica One", fontFamily: "Unica One", weight: 400 },
    paragraph: { name: "Crimson Text", fontFamily: "Crimson Text", weight: 400 },
    category: "Creative",
  },
  
  // ===== MINIMALIST STYLE (5 new) =====
  {
    id: 'source-sans-pro-source-serif-pro',
    heading: { name: "Source Sans Pro", fontFamily: "Source Sans Pro", weight: 700 },
    paragraph: { name: "Source Serif Pro", fontFamily: "Source Serif Pro", weight: 400 },
    category: "Minimalist",
  },
  {
    id: 'fjalla-one-cantarell',
    heading: { name: "Fjalla One", fontFamily: "Fjalla One", weight: 400 },
    paragraph: { name: "Cantarell", fontFamily: "Cantarell", weight: 400 },
    category: "Minimalist",
  },
  {
    id: 'pt-sans-cabin',
    heading: { name: "PT Sans", fontFamily: "PT Sans", weight: 700 },
    paragraph: { name: "Cabin", fontFamily: "Cabin", weight: 400 },
    category: "Minimalist",
  },
  {
    id: 'raleway-open-sans',
    heading: { name: "Raleway", fontFamily: "Raleway", weight: 700 },
    paragraph: { name: "Open Sans", fontFamily: "Open Sans", weight: 400 },
    category: "Minimalist",
  },
  {
    id: 'montserrat-lato',
    heading: { name: "Montserrat", fontFamily: "Montserrat", weight: 800 },
    paragraph: { name: "Lato", fontFamily: "Lato", weight: 400 },
    category: "Modern",
  },
];
