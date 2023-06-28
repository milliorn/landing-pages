import { Suspense } from "react";
import { useImage } from "react-image";

/**
 * creates the netflix logo on top center of page
 * @param {object} props
 * @returns {JSX.Element}
 */
export function NetflixLogo({
  props,
}: {
  props: {
    alt: string;
    href: string;
    rel: string;
    src: string;
    target: string;
  };
}): JSX.Element {
    /* render image */
  function RenderImage() {
    const { src } = useImage({
      srcList: props.src,
    });

    return (
      <a href={props.href} target={props.target} rel={props.rel}>
        <img
          alt={props.alt}
          className="absolute w-20 sm:w-44 top-1/2 left-1/4 sm:left-28 lg:left-2/4"
          src={src}
          crossOrigin="anonymous"
          width={329}
          height={88}
        />
      </a>
    );
  }

  return (
    <Suspense>
      <RenderImage />
    </Suspense>
  );
}
