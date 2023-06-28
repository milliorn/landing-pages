/**
 * creates sign in button in nav
 * @param {object} props
 * @returns {JSX.Element}
 */
export function SiginInButton({
  props,
}: {
  props: {
    href: string;
    target: string;
    rel: string;
    signInText: string;
  };
}): JSX.Element {
  return (
    <a
      className="absolute right-0 items-center inline-block px-4 py-2 text-base text-white border-none rounded-none cursor-pointer btn top-2/4 hover:opacity-90"
      href={props.href}
      rel={props.rel}
      target={props.target}
    >
      <span className="capitalize">{props.signInText}</span>
    </a>
  );
}
