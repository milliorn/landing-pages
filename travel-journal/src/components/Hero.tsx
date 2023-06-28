import { GoGlobe } from "react-icons/go";

/* create hero on top of the page */
export default function Hero(): JSX.Element {
  return (
    <div className="flex justify-center p-4 font-sans lowercase bg-red-400 text-red-50">
      <span className="pr-4 text-xl md:text-4xl">
        <GoGlobe />
      </span>
      <h1 className="text-sm md:text-xl">my travel journal.</h1>
    </div>
  );
}
