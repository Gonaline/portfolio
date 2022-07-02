import PropTypes from "prop-types";
import SLeft from "./style";

export default function Left({ title, subTitle, description, textColor }) {
  return (
    <SLeft color={textColor}>
      <div>
        <p className="subTitle">{subTitle}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </SLeft>
  );
}
Left.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
