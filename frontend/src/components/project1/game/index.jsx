import PropTypes from "prop-types";
import { useContext } from "react";
import context from "@services/context/project1Ctx";

import SGame from "./style";

export default function Game({ color, colorButton }) {
  const game = ["rock", "paper", "scissors"];
  const { setUserChoice } = useContext(context);
  return (
    <SGame color={color} buttonColor={colorButton}>
      <div className="userChoice">
        {game.map((choice) => (
          <button
            key={choice}
            type="button"
            value={choice}
            onClick={() => {
              setUserChoice(choice);
            }}
          >
            <img
              className="choice"
              src={`./src/assets/pictures/project1/${choice}.png`}
              alt={choice}
            />
          </button>
        ))}
      </div>
      <div className="text">
        <h3>let's play !</h3>
        <h4>click on your choice</h4>
      </div>
    </SGame>
  );
}

Game.propTypes = {
  color: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
