import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="https://twitter.com" aria-label="twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" aria-label="facebook">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" aria-label="linkedin">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
