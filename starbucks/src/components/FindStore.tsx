import Marker from "../img/marker.svg";

/* find store button in navbar */
export function FindStore(): JSX.Element {
  return (
    <li className="mx-4 sm:my-0 my-1 font-bold leading-6">
      <a
        aria-label="home"
        className="flex items-center text-black no-underline"
        href="/"
      >
        <img
          className="sm:w-5 sm:h-5 sm:max-w-full mx-4 h-fit"
          src={Marker}
          alt=""
        />
        <span className="invisible sm:visible">Find a store</span>
      </a>
    </li>
  );
}
