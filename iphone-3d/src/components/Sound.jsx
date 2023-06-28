import { useCallback } from "react";

// global sound section
function Sound() {
  return (
    <div className="sound-section wrapper">
      <SoundBody />
    </div>
  );
}

export default Sound;

// Body found in sound section
function SoundBody() {
  return (
    <div className="body">
      <div className="sound-section-content content">
        <h2 className="title">New Sound System</h2>
        <p className="text">Feel the bass</p>
        <span className="description">
          From $41.62/mo. for 24 mo. or $999 before trade-in
        </span>
        <SoundLinks />
      </div>
    </div>
  );
}

// Lins found in sound body
function SoundLinks() {
  // scroll to the next section
  const handleLearnMore = useCallback(() => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
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
  );
}
