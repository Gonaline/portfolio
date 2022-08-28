import PropTypes from "prop-types";
import arrow from "@assets/pictures/arrow.svg";
import SLeft from "./style";

export default function Left({ title, subtitle, description, textColor }) {
  const scroll = () => {
    window.scrollTo(0, 1000);
  };

  return (
    <SLeft textColor={textColor}>
      <div className="container">
        <p className="subTitle">{subtitle}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <button className="arrow" type="button" onClick={scroll}>
        <img src={arrow} alt="arrow" />
      </button>
    </SLeft>
  );
}
Left.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
