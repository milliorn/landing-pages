/**
 * main hero
 */
export function Hero(props: {
  alt: string;
  h1: string;
  p: string;
  src: string;
}): JSX.Element {
  const { alt, h1, p, src } = props;
  return (
    <section className="flex flex-col p-5 font-sans tracking-wide">
      <img
        src={src}
        alt={alt}
        className="self-center xl:max-w-7xl"
        width={1314}
        height={770}
      />
      <h1 className="mx-auto mt-8 mb-2 text-4xl font-semibold md:ml-12">
        {h1}
      </h1>
      <p className="mx-auto mt-2 text-xl font-light md:ml-12">{p}</p>
    </section>
  );
}
