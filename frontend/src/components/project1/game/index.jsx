import PropTypes from "prop-types";
import { useContext } from "react";
import context from "@services/context/project1Ctx";
import SGame from "./style";

export default function Game({ color, colorHover }) {
  const game = ["rock", "paper", "scissors"];
  const { setUserChoice, setComputer } = useContext(context);

  function computerAnswer() {
    const number = Math.floor(Math.random() * 3);
    return game[number];
  }
  return (
    <SGame colorHover={colorHover} color={color}>
      <div className="userChoice">
        {game.map((choice) => (
          <button
            key={choice}
            type="button"
            value={choice}
            onClick={() => {
              setUserChoice(choice);
              setComputer(computerAnswer);
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
  colorHover: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
