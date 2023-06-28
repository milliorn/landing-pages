/**
 * join free for 30 days button when middle tab selected
 */
export function TabMiddleButton({
  props,
}: {
  props: {
    anchorText: string;
    href: string;
    p: string;
    rel: string;
    target: string;
  };
}): JSX.Element {
  return (
    <a
      className="items-center inline-block px-5 py-3 mr-2 text-sm text-center text-white uppercase border-none rounded-none cursor-pointer lg:text-base btn hover:opacity-90"
      href={props.href}
      rel={props.rel}
      target={props.target}
    >
      <span>{props.anchorText}</span>
    </a>
  );
}
