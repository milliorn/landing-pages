import { JoinButton } from "./JoinButton";
import { NetflixLogo } from "./NetflixLogo";
import { SiginInButton } from "./SiginInButton";

/**
 * create the Hero element on top of the page
 * @param {object} props
 * @returns {JSX.Element}
 */
export function Hero(props: {
  alt: string;
  buttonText: string;
  h1: string;
  href: string;
  p: string;
  rel: string;
  signInText: string;
  src: string;
  target: string;
}): JSX.Element {
  return (
    <header className="relative z-0 w-full h-screen showcase after:absolute after:top-0 after:left-0 after:w-full after:h-full">
      <div className="relative z-10 h-24 showcase-top">
        <NetflixLogo props={props} />
        <SiginInButton props={props} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-5 py-0 m-auto mt-12 text-center text-gray-400">
        <h1 className="mx-0 mt-0 mb-4 text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl sm:inline-block">
          {props.h1}
        </h1>
        <p className="mx-0 mt-0 mb-8 text-sm font-normal text-center text-white uppercase lg:text-3xl sm:text-xl sm:inline-block">
          {props.p}
        </p>
        <JoinButton props={props} />
      </div>
    </header>
  );
}
