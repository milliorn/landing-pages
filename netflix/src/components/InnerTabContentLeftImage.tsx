import { Suspense } from "react";
import { useImage } from "react-image";

/**
 * image used inside of inner tab content left
 * @param {object} props
 * @returns {JSX.Element}
 */
export function InnerTabContentLeftImage({
  props,
}: {
  props: { alt: string; srcImg: string };
}): JSX.Element {
  /* render image */
  function RenderImage() {
    const { src } = useImage({
      srcList: props.srcImg,
    });

    return (
      <img
        src={src}
        alt={props.alt}
        className="w-10/12 mx-auto mt-8 sm:w-4/12 md:w-5/12 lg:w-4/12"
        crossOrigin="anonymous"
      />
    );
  }

  return (
    <Suspense>
      <RenderImage />
    </Suspense>
  );
}
