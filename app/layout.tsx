import type { Metadata } from 'next';
import localFont from "next/font/local";
import {
  Montserrat,
  Roboto,
  Playfair_Display,
  Lora,
  Lato,
  Poppins,
  Oswald,
  Raleway,
  Fira_Sans,
  Ubuntu,
  Bitter,
  PT_Sans,
  PT_Serif,
  Merriweather,
  Open_Sans,
  Source_Sans_3,
  Tinos,
} from 'next/font/google';
import {
  Quattrocento,
  Quattrocento_Sans,
  Libre_Baskerville,
  EB_Garamond,
  Proza_Libre,
  Cinzel,
  Fauna_One,
  Yeseva_One,
  Josefin_Sans,
  Spectral,
} from 'next/font/google';
import {
  Karla,
  DM_Serif_Display,
  Nunito,
  Quicksand,
  Work_Sans,
  Roboto_Slab,
  Abril_Fatface,
  Inconsolata,
  Arvo,
  Philosopher,
} from 'next/font/google';
import {
  Inter,
  Source_Serif_4,
  Cantarell,
  Cabin,
  Unica_One,
  Crimson_Text,
} from 'next/font/google';
import "./globals.css";
import type { ReactNode } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load all Google Fonts with their required weights
// Existing fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-roboto',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['700', '600', '400'],
  variable: '--font-open-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-lora',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-lato',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800', '700', '400'],
  variable: '--font-poppins',
  display: 'swap',
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-source-sans-pro',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-oswald',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-merriweather',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['800', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['800', '400'],
  variable: '--font-fira-sans',
  display: 'swap',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-ubuntu',
  display: 'swap',
});

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['800', '400'],
  variable: '--font-bitter',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pt-serif',
  display: 'swap',
});

const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tinos',
  display: 'swap',
});

// New fonts for additional pairs
const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-quattrocento',
  display: 'swap',
});

const quattrocentoSans = Quattrocento_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-quattrocento-sans',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const prozaLibre = Proza_Libre({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-proza-libre',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const faunaOne = Fauna_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fauna-one',
  display: 'swap',
});

const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-yeseva-one',
  display: 'swap',
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-josefin-sans',
  display: 'swap',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-spectral',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-karla',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-display',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-nunito',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-quicksand',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-work-sans',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-robot-slab',
  display: 'swap',
});

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril-fatface',
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inconsolata',
  display: 'swap',
});

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-arvo',
  display: 'swap',
});

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-philosopher',
  display: 'swap',
});

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-source-serif-pro',
  display: 'swap',
});

const cantarell = Cantarell({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-cantarell',
  display: 'swap',
});

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-cabin',
  display: 'swap',
});

const unicaOne = Unica_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-unica-one',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-crimson-text',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
  display: 'swap',
});

// Combine all font variable classNames
const allFontClasses = [
  geistSans.variable,
  geistMono.variable,
  montserrat.variable,
  roboto.variable,
  playfairDisplay.variable,
  openSans.variable,
  lora.variable,
  lato.variable,
  poppins.variable,
  sourceSansPro.variable,
  oswald.variable,
  merriweather.variable,
  raleway.variable,
  firaSans.variable,
  ubuntu.variable,
  bitter.variable,
  ptSans.variable,
  ptSerif.variable,
  tinos.variable,
  // New fonts
  quattrocento.variable,
  quattrocentoSans.variable,
  libreBaskerville.variable,
  ebGaramond.variable,
  prozaLibre.variable,
  cinzel.variable,
  faunaOne.variable,
  yesevaOne.variable,
  josefinSans.variable,
  spectral.variable,
  karla.variable,
  dmSerifDisplay.variable,
  nunito.variable,
  quicksand.variable,
  workSans.variable,
  robotoSlab.variable,
  abrilFatface.variable,
  inconsolata.variable,
  arvo.variable,
  philosopher.variable,
  sourceSerifPro.variable,
  cantarell.variable,
  cabin.variable,
  unicaOne.variable,
  crimsonText.variable,
  inter.variable,
].join(' ');

export const metadata: Metadata = {
  title: "Google Font Pairs - Beautiful Typography Combinations",
  description: "Discover perfect Google Font pairings for your next design project. 45+ hand-curated combinations of heading and body fonts with optimized loading.",
  keywords: ["fonts", "typography", "google fonts", "web design", "font pairs", "font combinations", "css", "design"],
  authors: [{ name: "Font Pairs" }],
  openGraph: {
    title: "Google Font Pairs - Beautiful Typography Combinations",
    description: "Discover perfect Google Font pairings for your next design project",
    url: "https://font-pairs-google.vercel.app",
    siteName: "Google Font Pairs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Google Font Pairs - Typography Combinations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Font Pairs - Beautiful Typography Combinations",
    description: "Discover perfect Google Font pairings for your next design project",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from './components/ThemeProvider';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${allFontClasses} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
