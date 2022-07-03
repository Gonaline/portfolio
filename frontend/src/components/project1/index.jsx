import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import context from "@services/context/project1Ctx";
import dataProject1 from "@assets/data/project1";
import Title from "@components/title";
import Nav from "@components/projectNav";
import Game from "./game";
import Result from "./result";
import Counter from "./counter";
import SProject1 from "./style";

export default function Project1({
  colorRight,
  title,
  colorButton,
  colorHover,
}) {
  const { userChoice, computer } = useContext(context);

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
    <SProject1 backgroundColor={colorRight}>
      <Title title={title} />
      <Nav color={colorButton} colorHover={colorHover} />
      {!userChoice ? (
        <Game colorButton={colorButton} colorHover={colorHover} />
      ) : (
        <section className="right">
          <Counter
            color={colorButton}
            colorHover={colorHover}
            userCounter={userCounter}
            computerCounter={computerCounter}
          />
          <div className="bottom">
            <Result
              color={colorButton}
              colorHover={colorHover}
              message={message}
              userPoint={userPoint}
              computerPoint={computerPoint}
            />
          </div>
        </section>
      )}
    </SProject1>
  );
}

Project1.propTypes = {
  colorRight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
};
