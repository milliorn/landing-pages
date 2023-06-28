import { CreateChevronRight } from "./CreateChevronRight";

/**
 * skeleton for the join now for free button
 * @param {object} props
 * @returns {JSX.Element}
 */
export function JoinButton({
  props,
}: {
  props: {
    buttonText: string;
    href: string;
    rel: string;
    target: string;
  };
}): JSX.Element {
  return (
    <a
      className="items-center px-3 py-2 mr-2 text-white uppercase border-none rounded-none cursor-pointer lg:py-6 sm:inline-block btn hover:opacity-90"
      href={props.href}
      rel={props.rel}
      target={props.target}
    >
      <CreateChevronRight props={props} />
    </a>
  );
}
