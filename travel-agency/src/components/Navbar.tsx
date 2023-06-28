import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const navStyles = [
  "fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 ease-in duration-300",
  "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10",
] as const;

const navList = [
  "Home",
  "Amenities",
  "Destinations",
  "Reservations",
  "Rooms",
] as const;

// navbar that does an overlay over the page when clicked
function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);

  // set opposite state
  function handleNav(): void {
    setNav(!nav);

    // enable/disable scrolling based on if nav is present
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Excursions</h1>
      <div className="z-20 text-white cursor-pointer">
        <HiMenuAlt3 onClick={handleNav} size={25} />
      </div>
      <div className={nav ? navStyles[0] : navStyles[1]}>
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          {navList.map((e) => (
            <li className="font-bold text-3xl p-4" key={e}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
