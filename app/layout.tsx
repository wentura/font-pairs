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
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
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
  weight: ['400'],
  variable: '--font-open-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-lora',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-poppins',
  display: 'swap',
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400'],
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
  weight: ['400'],
  variable: '--font-merriweather',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-raleway',
  display: 'swap',
});

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-fira-sans',
  display: 'swap',
});

const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tinos',
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
  weight: ['800'],
  variable: '--font-bitter',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pt-serif',
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
  tinos.variable,
  ubuntu.variable,
  bitter.variable,
  ptSans.variable,
  ptSerif.variable,
].join(' ');

export const metadata: Metadata = {
  title: "Google Font Pairs - Beautiful Typography Combinations",
  description: "Discover perfect Google Font pairings for your next design project. 10+ hand-curated combinations of heading and body fonts with optimized loading.",
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

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${allFontClasses} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
