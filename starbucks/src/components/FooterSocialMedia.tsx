import Facebook from "../img/social-facebook.svg";
import Instagram from "../img/social-instagram.svg";
import Pinterest from "../img/social-pinterest.svg";
import Spotify from "../img/social-spotify.svg";
import Twitter from "../img/social-twitter.svg";
import Youtube from "../img/social-youtube.svg";

/* container for social media buttons in footer */
export function FooterSocialMedia(): JSX.Element {
  return (
    <div className="social flex items-center my-8 mx-0 justify-center">
      <a
        aria-label="home"
        className="no-underline mr-4"
        href="https://spotify.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="max-w-full w-8 h-8" src={Spotify} alt="" />
      </a>
      <a
        aria-label="home"
        className="no-underline mr-4"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="max-w-full w-8 h-8" src={Facebook} alt="" />
      </a>
      <a
        aria-label="home"
        className="no-underline mr-4"
        href="https://pinterest.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="max-w-full w-8 h-8" src={Pinterest} alt="" />
      </a>
      <a
        aria-label="home"
        className="no-underline mr-4"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="max-w-full w-8 h-8" src={Instagram} alt="" />
      </a>
      <a
        aria-label="home"
        className="no-underline mr-4"
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="max-w-full w-8 h-8" src={Youtube} alt="" />
      </a>
      <a
        aria-label="home"
        className="no-underline mr-4"
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="max-w-full w-8 h-8" src={Twitter} alt="" />
      </a>
    </div>
  );
}
