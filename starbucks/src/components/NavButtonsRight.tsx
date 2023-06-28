import { FindStore } from "./FindStore";
import { JoinNow } from "./JoinNow";
import { SignIn } from "./SignIn";

/* buttons on right side of the navbar */
export function NavButtonsRight(): JSX.Element {
  return (
    <ul className="sm:flex items-center list-none sm:mb-0 mt-1">
      <FindStore />
      <SignIn />
      <JoinNow />
    </ul>
  );
}
