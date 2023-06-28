import CardImage from "./CardImage";

/* open clicked image in a new tab */
function openImage(url: string): () => void {
  return (): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
}

/* template to use for building cards */
export default function Card(props: {
  alt: string | undefined;
  country: string | null | undefined;
  date: string | null | undefined;
  description: string | null | undefined;
  imgSrc: string;
  location: string | null | undefined;
  locationUrl: string | undefined;
}): JSX.Element {
  return (
    <div className="flex justify-center h-100">
      <div className="flex flex-col rounded-lg shadow-lg md:flex-row md:max-w-xl bg-red-50 sm:my-8">
        <CardImage props={props} openImage={openImage} />
      </div>
    </div>
  );
}
