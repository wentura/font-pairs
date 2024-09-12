import Image from "next/image";

export default function Home() {
  const fonts = [
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
      p: { name: "Roboto", klass: "roboto-regular" },
    },
    {
      h: {
        name: "Fira Sans",
        klass: "fira-sans-extrabold",
      },
      p: { name: "Georgia -> Tinos", klass: "tinos-regular" },
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
      p: { name: "PT SERIF", klass: "pt-serif-regular" },
    },
  ];
  return (
    <div className="flex-col max-w-screen-sm mx-auto">
      {fonts.map((font, index) => (
        <div
          className="py-12 px-12 mt-96 min-h-[500px] bg-neutral-50"
          key={index}
        >
          <h1 className={`${font.h.klass} text-6xl pb-8 leading-tight`}>
            {font.h.name}
          </h1>
          <p className={`${font.p.klass} text-md`}>
            <span className="underline underline-offset-2">{font.p.name}</span>{" "}
            is Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            et necessitatibus eaque alias sunt enim voluptas a quasi, itaque
            possimus ratione consectetur? Praesentium, blanditiis possimus
            minima similique cupiditate incidunt commodi!
          </p>
        </div>
      ))}
    </div>
  );
}
