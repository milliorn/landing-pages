/**
 * creates the site logo in navbar
 */
export function AirBnBLogo(props: { alt: string; src: string }): JSX.Element {
  const { alt, src } = props;
  return (
    <a href="https://github.com/milliorn">
      <img
        className="flex justify-center max-w-xs w-28"
        src={src}
        alt={alt}
        width={1440}
        height={450}
      />
    </a>
  );
}
