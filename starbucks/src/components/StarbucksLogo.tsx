/* logo found in navbar */
import Logo from "../img/logo.svg";

/* company logo in navbar */
export function StarbucksLogo(): JSX.Element {
  return (
    <div className="invisible sm:visible">
      <a aria-label="home" className="text-black no-underline" href="/">
        <img className="w-12 h-12 sm:ml-1" src={Logo} alt="logo" />
      </a>
    </div>
  );
}
