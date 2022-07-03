import PropTypes from "prop-types";
import { useContext } from "react";
import context from "@services/context/project1Ctx";
import SResult from "./style";

function Result({ otherColor, colorHover, message, userPoint, computerPoint }) {
  const { userChoice, computer } = useContext(context);

  const imgUser = `./src/assets/pictures/project1/${userChoice}.png`;
  const imgComputer = `./src/assets/pictures/project1/${computer}.png`;

  return (
    <SResult colorHover={colorHover} otherColor={otherColor}>
      <div>
        <div className="result">
          {userPoint === 0 ? (
            <div className="onePoint none" />
          ) : (
            <div className="onePoint userWin">
              <p>+1</p>
            </div>
          )}
          <div
            className={`user choice ${
              userPoint === 0 && computerPoint === 1 ? "delete" : ""
            } 
            `}
          >
            <img src={imgUser} alt={imgUser} />
          </div>
          <div
            className={`computer choice ${
              userPoint === 1 && computerPoint === 0 ? "delete" : ""
            } 
            `}
          >
            <img src={imgComputer} alt={imgComputer} />
          </div>
          {computerPoint === 0 ? (
            <div className="onePoint none" />
          ) : (
            <div className="onePoint computerWin">
              <p>+1</p>
            </div>
          )}
        </div>
        <div className="message">
          <h3>{message}</h3>
        </div>
      </div>
    </SResult>
  );
}

export default Result;

Result.propTypes = {
  otherColor: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  userPoint: PropTypes.number.isRequired,
  computerPoint: PropTypes.number.isRequired,
};
