import PropTypes from "prop-types";

import SCounter from "./style";

function Counter({ color, colorHover, userCounter, computerCounter }) {
  return (
    <SCounter colorButton={color} colorHover={colorHover}>
      <div className="you">
        <h4>YOU</h4>
        <div className="points">
          {userCounter} {userCounter > 1 ? "pts" : "pt"}
        </div>
      </div>
      <div className="computer">
        <div className="points">
          {computerCounter} {computerCounter > 1 ? "pts" : "pt"}
        </div>
        <h4>COMPUTER</h4>
      </div>
    </SCounter>
  );
}

export default Counter;

Counter.propTypes = {
  color: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
  userCounter: PropTypes.number.isRequired,
  computerCounter: PropTypes.number.isRequired,
};
