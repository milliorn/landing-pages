import { CardLayoutImage } from "./CardLayoutImage";
import { CardTitle } from "./CardTitle";
import { Price } from "./Price";
import { Ratings } from "./Ratings";

/**
 * skeleton used for cards
 */
export function Card(props: {
  href: string;
  alt: string;
  src: string;
  title: string;
  price: string;
  country: string;
}): JSX.Element {
  const { href, alt, src, title, price, country } = props;

  /**
   * create random numbers
   */
  function randomNum({ fixed }: { fixed: number | undefined }): string {
    return (4.0 + Number(Math.random())).toFixed(fixed);
  }

  return (
    <div className="w-full h-full px-1 my-1 md:w-1/2 md:my-4 md:px-4">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <CardLayoutImage href={href} alt={alt} src={src} />
        <Ratings
          country={country}
          rating={randomNum({ fixed: 2 })}
          votes={randomNum({ fixed: 0 })}
        />
        <CardTitle title={title} />
        <Price price={price} />
      </article>
    </div>
  );
}
