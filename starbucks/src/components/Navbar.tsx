import { NavButtonsLeft } from "./NavButtonsLeft";
import { NavButtonsRight } from "./NavButtonsRight";
import { StarbucksLogo } from "./StarbucksLogo";

/* top component above BoxA */
export function Navbar(): JSX.Element {
  const data = ["Menu", "Rewards", "Gift Cards"] as const;

  return (
    <nav className="w-full sm:h-auto pb-4 sm:p-6 text-sm sm:text-base">
      <div className="flex items-center justify-between mx-auto my-0 max-w-screen-2xl">
        <StarbucksLogo />
        <NavButtonsLeft data={data} />
        <NavButtonsRight />
      </div>
    </nav>
  );
}
