import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const context = createContext(null);
export default context;

export function CtxProvider({ children }) {
  const [userChoice, setUserChoice] = useState("");
  const [computer, setComputer] = useState("");
  const [game, setGame] = useState([]);

  function computerAnswer() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      default:
        return "scissors";
    }
  }
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get(
  //       `${import.meta.env.VITE_BACKEND_URL}${"/project1"}`
  //     );
  //     setGame(data);
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   setComputer(computerAnswer());
  // }, [userChoice]);

  // useEffect(() => {
  //   setIndex(searchIndex());
  // }, [computer]);

  useEffect(() => {
    setComputer(computerAnswer());
  }, [userChoice]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}${`/project1/${
          userChoice + computer
        }`}`
      );
      setGame(data);
    };
    getData();
  }, []);

  // console.log("data: ", game);

  // const [index, setIndex] = useState(0);
  // const [userCounter, setUserCounter] = useState(0);

  // function searchIndex() {
  //   const i = game.findIndex((element) => element.id === userChoice + computer);
  //   return i;
  // }

  // useEffect(() => {
  //   console.log(dataProject1[index]?.userPoint);
  // }, [index]);

  return (
    <context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userChoice,
        setUserChoice,
        game,
        computer,
      }}
    >
      {children}
    </context.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
