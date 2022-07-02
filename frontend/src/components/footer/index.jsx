import PropTypes from "prop-types";
import linkedinImg from "@assets/pictures/linkedin-icon.svg";
import githubImg from "@assets/pictures/github-icon.svg";
import SFooter from "./style";

export default function Footer({ backgroundColor }) {
  return (
    <SFooter backgroundColor={backgroundColor}>
      <div className="color" />
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/alinegonce/"
          className="icon"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={linkedinImg} alt="linkedin-icon" />
        </a>
        <a
          href="https://www.github.com/Gonaline"
          className="icon"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={githubImg} alt="github-icon" />
        </a>
      </div>
    </SFooter>
  );
}
Footer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
