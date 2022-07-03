import PropTypes from "prop-types";

import SCounter from "./style";

function Counter({ color, userCounter, computerCounter }) {
  return (
    <SCounter color={color}>
      <div className="you">
        <h4>YOU</h4>
        <div className="points">
          <p>
            {userCounter} {userCounter > 1 ? "pts" : "pt"}
          </p>
        </div>
      </div>
      <div className="computer">
        <div className="points">
          <p>
            {computerCounter} {computerCounter > 1 ? "pts" : "pt"}
          </p>
        </div>
        <h4>COMPUTER</h4>
      </div>
    </SCounter>
  );
}

export default Counter;

Counter.propTypes = {
  color: PropTypes.string.isRequired,
  userCounter: PropTypes.number.isRequired,
  computerCounter: PropTypes.number.isRequired,
};
