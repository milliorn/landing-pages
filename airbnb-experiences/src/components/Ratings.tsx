import { CardHeading } from "./CardHeading";

/**
 * create/fill ratings in cards
 */
export function Ratings(props: {
  country: string;
  rating: string;
  votes: string;
}): JSX.Element {
  const { country, rating, votes } = props;
  return (
    <div className="flex items-center justify-between leading-tight md:p-4">
      <div className="flex items-center justify-between h-16">
        <CardHeading votes={votes} rating={rating} country={country} />
      </div>
    </div>
  );
}
