/**
 * output the rating of the card
 */
export function CardRating(props: {
  rating: string;
  country: string;
}): JSX.Element {
  const { rating, country } = props;
  return (
    <span className="invisible md:visible text-neutral-400">
      ({rating}) &#183; {country}
    </span>
  );
}
