import { NavbarLogo } from "./NavbarLogo";

/**
 * frontpage navbar
 */
export function Navbar(): JSX.Element {
  return (
    <nav className="py-3 bg-white shadow-md dark:bg-gray-800 ">
      <div className="container px-8 mx-auto">
        <NavbarLogo />
      </div>
    </nav>
  );
}
