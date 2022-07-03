import PropTypes from "prop-types";
import SLeft from "./style";

export default function Left({ title, subtitle, description, textColor }) {
  return (
    <SLeft textColor={textColor}>
      <div>
        <p className="subTitle">{subtitle}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </SLeft>
  );
}
Left.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
