/**
 * create image for card layout
 */
export function CardLayoutImage(props: {
  href: string;
  alt: string;
  src: string;
}): JSX.Element {
  const { href, alt, src } = props;
  return (
    <a href={href}>
      <img alt={alt} className="block w-full" src={src} />
    </a>
  );
}
