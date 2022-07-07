import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import project1Ctx from "@services/context/project1Ctx";
import dataProject1 from "@assets/data/project1";
import Title from "@components/title";
import Nav from "@components/projectNav";
import Game from "./game";
import Result from "./result";
import Counter from "./counter";
import Replay from "./replay";
import SProject1 from "./style";

export default function Project1({
  color,
  backgroundColor,
  otherColor,
  flashColor,
  title,
}) {
  const { userChoice, computer } = useContext(project1Ctx);
  const [message, setMessage] = useState("");
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);
  const [userCounter, setUserCounter] = useState(0);

  useEffect(() => {
    if (!userChoice || !computer) return;
    const index = dataProject1.findIndex(
      (element) => element.id === userChoice + computer
    );
    setMessage(dataProject1[index].message);
    setUserPoint(dataProject1[index].userPoint);
    setComputerPoint(dataProject1[index].computerPoint);
    setUserCounter(dataProject1[index].userPoint + userCounter);
    setComputerCounter(dataProject1[index].computerPoint + computerCounter);
  }, [userChoice]);

  return (
    <SProject1 backgroundColor={backgroundColor}>
      <Title title={title} />
      <Nav color={flashColor} colorHover={color} />
      {!userChoice ? (
        <Game color={otherColor} colorHover={color} />
      ) : (
        <section className="right">
          <Counter
            color={color}
            userCounter={userCounter}
            computerCounter={computerCounter}
          />
          <div className="bottom">
            <Result
              otherColor={otherColor}
              colorHover={flashColor}
              message={message}
              userPoint={userPoint}
              computerPoint={computerPoint}
            />
            <Replay color={flashColor} />
          </div>
        </section>
      )}
    </SProject1>
  );
}

Project1.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  otherColor: PropTypes.string.isRequired,
  flashColor: PropTypes.string.isRequired,
};
