import { createContext, useState } from "react";
import PropTypes from "prop-types";

const project1Ctx = createContext();
export default project1Ctx;

export function CtxProvider({ children }) {
  const [userChoice, setUserChoice] = useState("");
  const [computer, setComputer] = useState("");

  const reset = () => {
    setUserChoice("");
    setComputer("");
  };
  return (
    <project1Ctx.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userChoice,
        setUserChoice,
        computer,
        setComputer,
        reset,
      }}
    >
      {children}
    </project1Ctx.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
