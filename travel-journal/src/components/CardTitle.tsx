import GoogleMaps from "./GoogleMaps";

/* generate the title of the card */
export default function CardTitle({
  props,
}: {
  props: {
    country: string | null | undefined;
    date: string | null | undefined;
    description: string | null | undefined;
    location: string | null | undefined;
    locationUrl: string | undefined;
  };
}): JSX.Element {
  return (
    <div className="flex flex-col justify-start p-6">
      <GoogleMaps props={props} />
      <p className="text-3xl font-bold capitalize">{props.location}</p>
      <p className="pt-4 text-xs font-bold capitalize">{props.date}</p>
      <p className="pt-4 text-xs text-red-900">{props.description}</p>
    </div>
  );
}
