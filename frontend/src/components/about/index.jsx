import PropTypes from "prop-types";
import SAbout from "./style";

export default function About({ backgroundColor, title }) {
  return (
    <SAbout backgroundColor={backgroundColor}>
      <p>{title}</p>
    </SAbout>
  );
}

About.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
