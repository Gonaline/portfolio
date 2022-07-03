// import dataProject1 from "@assets/data/project1";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const context = createContext();
export default context;

export function CtxProvider({ children }) {
  const [userChoice, setUserChoice] = useState("");
  const [computer, setComputer] = useState("");

  return (
    <context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userChoice,
        setUserChoice,
        computer,
        setComputer,
      }}
    >
      {children}
    </context.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
