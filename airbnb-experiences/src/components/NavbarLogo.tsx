import logo from "../assets/logo.webp";
import { AirBnBLogo } from "./AirBnBLogo";

/**
 * contains the navbar logo
 */
export function NavbarLogo(): JSX.Element {
  return (
    <div className="flex items-center ">
      <AirBnBLogo src={logo} alt="site logo" />
    </div>
  );
}
