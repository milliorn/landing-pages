import { useCallback } from "react";

// global display section
function Display({ triggerPreview }) {
  // when clicked you scroll to the next section below
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that is up to 2x brighter in the sun.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try it out!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Go back
      </button>
    </div>
  );
}

export default Display;
