import { HiLocationMarker } from "react-icons/hi";

/* icon to click that redirects you to google maps with the location */
export default function GoogleMaps({
  props,
}: {
  props: {
    country: string | null | undefined;
    description: string | null | undefined;
    location: string | null | undefined;
    locationUrl: string | undefined;
  };
}): JSX.Element {
  return (
    <div className="inline-flex mb-2 text-xl font-medium text-red-50">
      <div className="mr-1 text-3xl text-red-400">
        <HiLocationMarker />
      </div>
      <span className="mr-4 text-red-900 capitalize">{props.country}</span>
      <a
        className="my-auto text-xs text-red-600 capitalize"
        href={props.locationUrl}
        rel="noreferrer"
        target="_blank"
      >
        <span className="hover:sepia">google maps</span>
      </a>
    </div>
  );
}
