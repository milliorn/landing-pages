import { useCallback } from "react";
import Iphone from "../assets/images/iphone-14.webp";
import HoldingIphone from "../assets/images/iphone-hand.webp";

// global jumbotron
function Jumbotron() {
  // scroll to the next section
  const handleLearnMore = useCallback(() => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <link rel="preload" as="image" href={Iphone} />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <span className="link" onClick={handleLearnMore}>
            Learn more
          </span>
        </li>
      </ul>

      <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
    </div>
  );
}

export default Jumbotron;
