import PropTypes from "prop-types";
import SLeft from "./style";

export default function Left({ title, subTitle, description, textColor }) {
  return (
    <SLeft>
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>{description}</p>
      <p>{textColor}</p>
    </SLeft>
  );
}
Left.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
