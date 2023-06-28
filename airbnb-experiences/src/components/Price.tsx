/**
 * create price in cards
 */
export function Price(props: { price: string }): JSX.Element {
  const { price } = props;
  return (
    <div className="flex items-center justify-between leading-none md:p-4">
      <p className="text-sm no-underline hover:underline">
        <span className="font-bold">From ${price}</span> / person
      </p>
    </div>
  );
}
