/**
 * skeleton of inner left tab content
 * @param {object} props
 * @returns {JSX.Element}
 */
export function InnerTabContentLeft({
  props,
}: {
  props: {
    href: string;
    paragraph: string;
    rel: string;
    span: string;
    target: string;
  };
}): JSX.Element {
  return (
    <div>
      <p className="max-w-xl mx-0 mt-2 mb-4 text-xl leading-none sm:text-2xl xl:text-4xl">
        {props.paragraph}
      </p>
      <a
        className="items-center block px-5 py-2 mr-2 text-sm text-white uppercase border-none rounded-none cursor-pointer sm:w-5/12 lg:text-base btn hover:opacity-90"
        href={props.href}
        rel={props.rel}
        target={props.target}
      >
        {props.span}
      </a>
    </div>
  );
}
