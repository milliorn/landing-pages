import CardTitle from "./CardTitle";

/* template for the image of the card */
export default function CardImage({
  props,
  openImage,
}: {
  props: {
    alt: string | undefined;
    country: string | null | undefined;
    date: string | null | undefined;
    description: string | null | undefined;
    imgSrc: string;
    location: string | null | undefined;
    locationUrl: string | undefined;
  };
  openImage: (url: string) => () => void;
}): JSX.Element {
  return (
    <>
      <img
        alt={props.alt}
        className="object-cover w-full p-8 rounded-t-lg cursor-pointer hover:saturate-200 h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        onClick={openImage(props.imgSrc)}
        src={props.imgSrc}
      />
      <CardTitle props={props} />
    </>
  );
}
