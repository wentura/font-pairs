const fontPairs = [
  {
    h: {
      name: "Montserrat",
      klass: "montserrat-800",
    },
    p: { name: "Roboto", klass: "roboto-regular" },
  },
  {
    h: {
      name: "Playfair Display",
      klass: "playfair-display-800",
    },
    p: { name: "Open Sans", klass: "open-sans-400" },
  },
  {
    h: {
      name: "Lora",
      klass: "lora-700",
    },
    p: { name: "Lato", klass: "lato-regular" },
  },
  {
    h: {
      name: "Poppins",
      klass: "poppins-extrabold",
    },
    p: { name: "Source Sans Pro", klass: "source-sans-400" },
  },
  {
    h: {
      name: "Oswald",
      klass: "oswald-800",
    },
    p: { name: "Merriweather", klass: "merriweather-regular" },
  },
  {
    h: {
      name: "Raleway",
      klass: "raleway-800",
    },
    p: { name: "Roboto Slab", klass: "roboto-slab-400" },
  },
  {
    h: {
      name: "Fira Sans",
      klass: "fira-sans-extrabold",
    },
    p: { name: "Source Serif 4", klass: "source-serif-4-400" },
  },
  {
    h: {
      name: "Ubuntu",
      klass: "ubuntu-bold",
    },
    p: { name: "Open Sans", klass: "open-sans-400" },
  },
  {
    h: {
      name: "Bitter",
      klass: "bitter-800",
    },
    p: { name: "Source Sans Pro", klass: "source-sans-400" },
  },
  {
    h: {
      name: "PT Sans",
      klass: "pt-sans-bold",
    },
    p: { name: "PT Serif", klass: "pt-serif-regular" },
  },
  {
    h: {
      name: "Inter",
      klass: "inter-700",
    },
    p: { name: "Merriweather", klass: "merriweather-regular" },
  },
  {
    h: {
      name: "Nunito",
      klass: "nunito-700",
    },
    p: { name: "Roboto", klass: "roboto-regular" },
  },
  {
    h: {
      name: "Work Sans",
      klass: "work-sans-700",
    },
    p: { name: "Domine", klass: "domine-400" },
  },
  {
    h: {
      name: "DM Serif Display",
      klass: "dm-serif-display-regular",
    },
    p: { name: "Mulish", klass: "mulish-400" },
  },
  {
    h: {
      name: "Libre Baskerville",
      klass: "libre-baskerville-700",
    },
    p: { name: "Lato", klass: "lato-regular" },
  },
  {
    h: {
      name: "Cabin",
      klass: "cabin-700",
    },
    p: { name: "Open Sans", klass: "open-sans-400" },
  },
  {
    h: {
      name: "Source Serif 4",
      klass: "source-serif-4-700",
    },
    p: { name: "Source Sans Pro", klass: "source-sans-400" },
  },
  {
    h: {
      name: "Merriweather Sans",
      klass: "merriweather-sans-700",
    },
    p: { name: "Merriweather", klass: "merriweather-regular" },
  },
  {
    h: {
      name: "Josefin Sans",
      klass: "josefin-sans-700",
    },
    p: { name: "PT Serif", klass: "pt-serif-regular" },
  },
  {
    h: {
      name: "Barlow",
      klass: "barlow-800",
    },
    p: { name: "Roboto", klass: "roboto-regular" },
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Top 20 Pairings
        </p>
        <h1 className="text-4xl font-semibold text-neutral-900 sm:text-5xl">
          Heading & paragraph fonts that work beautifully together
        </h1>
        <p className="text-base text-neutral-600 sm:text-lg">
          Explore proven Google Font combinations for hero sections, editorials,
          product pages and long-form reading. Each pairing balances a confident
          display face with a reliable text companion.
        </p>
      </header>
      <section className="flex flex-col gap-12">
        {fontPairs.map((font, index) => (
          <article
            className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10 shadow-sm"
            key={`${font.h.name}-${font.p.name}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Pair {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              className={`${font.h.klass} mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl`}
            >
              {font.h.name}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-neutral-500">
              Heading font
            </p>
            <p
              className={`${font.p.klass} mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg`}
            >
              This duo balances <span className="font-semibold text-neutral-900">{font.h.name}</span>
              {" "}headlines with <span className="font-semibold text-neutral-900">{font.p.name}</span>
              {" "}body copy so longer reads stay clear and inviting. Use it for
              marketing pages, editorial layouts, and product experiences that
              need polish and readability.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
