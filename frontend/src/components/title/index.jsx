import PropTypes from "prop-types";
import Style from "./style";

export default function Title({ title }) {
  return (
    <Style>
      <h2>{title}</h2>
    </Style>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
