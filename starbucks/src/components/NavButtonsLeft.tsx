import uuid from "react-uuid";

/* buttons on left side of the navbar */
export function NavButtonsLeft({
  data,
}: {
  data: readonly ["Menu", "Rewards", "Gift Cards"];
}): JSX.Element {
  return (
    <ul className="sm:flex items-center sm:ml-5 uppercase list-none">
      {data.map((e) => (
        <li className="mx-4 sm:my-0 my-1 font-bold leading-6" key={uuid()}>
          <a aria-label="home" className="text-black no-underline" href="/">
            {e}
          </a>
        </li>
      ))}
    </ul>
  );
}
