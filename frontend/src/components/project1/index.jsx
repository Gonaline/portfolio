import PropTypes from "prop-types";
import Title from "@components/title";
import Nav from "@components/projectNav";
import Game from "./game";
import SProject1 from "./style";

export default function Project1({ color, title, colorButton, colorHover }) {
  return (
    <SProject1 color={color} colorButton={colorButton}>
      <Title title={title} />
      <Nav color={colorButton} colorHover={colorHover} />
      <Game color={color} colorButton={colorButton} />
    </SProject1>
  );
}

Project1.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
};
