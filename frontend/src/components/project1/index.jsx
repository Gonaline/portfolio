import PropTypes from "prop-types";
import SProject1 from "./style";

export default function Project1({ color, title, colorButton }) {
  return (
    <SProject1 color={color} colorButton={colorButton}>
      <p>{title}</p>
    </SProject1>
  );
}

Project1.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
