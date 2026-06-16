// Font pair data - separated for maintainability

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

export const fontPairs: FontPair[] = [
  {
    id: 'montserrat-roboto',
    heading: {
      name: "Montserrat",
      fontFamily: "Montserrat",
      weight: 800,
    },
    paragraph: {
      name: "Roboto",
      fontFamily: "Roboto",
      weight: 400,
    },
  },
  {
    id: 'playfair-open-sans',
    heading: {
      name: "Playfair Display",
      fontFamily: "Playfair Display",
      weight: 800,
    },
    paragraph: {
      name: "Open Sans",
      fontFamily: "Open Sans",
      weight: 400,
    },
  },
  {
    id: 'lora-lato',
    heading: {
      name: "Lora",
      fontFamily: "Lora",
      weight: 700,
    },
    paragraph: {
      name: "Lato",
      fontFamily: "Lato",
      weight: 400,
    },
  },
  {
    id: 'poppins-source-sans',
    heading: {
      name: "Poppins",
      fontFamily: "Poppins",
      weight: 800,
    },
    paragraph: {
      name: "Source Sans Pro",
      fontFamily: "Source Sans Pro",
      weight: 400,
    },
  },
  {
    id: 'oswald-merriweather',
    heading: {
      name: "Oswald",
      fontFamily: "Oswald",
      weight: 700,
    },
    paragraph: {
      name: "Merriweather",
      fontFamily: "Merriweather",
      weight: 400,
    },
  },
  {
    id: 'raleway-roboto-2',
    heading: {
      name: "Raleway",
      fontFamily: "Raleway",
      weight: 800,
    },
    paragraph: {
      name: "Roboto",
      fontFamily: "Roboto",
      weight: 400,
    },
  },
  {
    id: 'fira-sans-tinos',
    heading: {
      name: "Fira Sans",
      fontFamily: "Fira Sans",
      weight: 800,
    },
    paragraph: {
      name: "Tinos",
      fontFamily: "Tinos",
      weight: 400,
    },
  },
  {
    id: 'ubuntu-open-sans',
    heading: {
      name: "Ubuntu",
      fontFamily: "Ubuntu",
      weight: 700,
    },
    paragraph: {
      name: "Open Sans",
      fontFamily: "Open Sans",
      weight: 400,
    },
  },
  {
    id: 'bitter-source-sans',
    heading: {
      name: "Bitter",
      fontFamily: "Bitter",
      weight: 800,
    },
    paragraph: {
      name: "Source Sans Pro",
      fontFamily: "Source Sans Pro",
      weight: 400,
    },
  },
  {
    id: 'pt-sans-pt-serif',
    heading: {
      name: "PT Sans",
      fontFamily: "PT Sans",
      weight: 700,
    },
    paragraph: {
      name: "PT Serif",
      fontFamily: "PT Serif",
      weight: 400,
    },
  },
];
