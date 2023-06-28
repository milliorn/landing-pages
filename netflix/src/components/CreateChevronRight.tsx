import { FiChevronRight } from "react-icons/fi";

/**
 * create the arrow pointing right icon
 * @param {object} props
 * @returns {JSX.Element}
 */
export function CreateChevronRight({
  props,
}: {
  props: {
    buttonText: string;
  };
}): JSX.Element {
  return (
    <span className="p-6 text-base md:p-8 xl:p-12 md:text-2xl xl:text-3xl">
      {props.buttonText}
      {
        <FiChevronRight className="hidden pb-1 ml-8 text-3xl font-extrabold align-middle sm:inline" />
      }
    </span>
  );
}
