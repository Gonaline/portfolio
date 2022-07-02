import PropTypes from "prop-types";
import Title from "@components/title";
import Nav from "@components/projectNav";
import SProject1 from "./style";

export default function Project2({ color, title, colorButton }) {
  return (
    <SProject1 color={color} colorButton={colorButton}>
      <Title title={title} />
      <Nav color={colorButton} />
    </SProject1>
  );
}

Project2.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
