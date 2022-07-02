import PropTypes from "prop-types";
import SAbout from "./style";

export default function About({ color, title, colorButton }) {
  return (
    <SAbout color={color} colorButton={colorButton}>
      <p>{title}</p>
    </SAbout>
  );
}

About.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
