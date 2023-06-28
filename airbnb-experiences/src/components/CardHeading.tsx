import { CardRating } from "./CardRating";
import { CardRedStar } from "./CardRedStar";
import { CardVotes } from "./CardVotes";

/**
 * create the card heading for each card
 */
export function CardHeading(props: {
  votes: string;
  rating: string;
  country: string;
}): JSX.Element {
  const { votes, rating, country } = props;
  return (
    <h1 className="lg:text-lg">
      <a
        className="text-black no-underline hover:underline"
        href="https://github.com/milliorn"
      >
        <CardRedStar />
        <CardVotes votes={votes} />
        <CardRating rating={rating} country={country} />
      </a>
    </h1>
  );
}
