import { createContext, useState } from "react";
import PropTypes from "prop-types";

const Ctx = createContext();
export default Ctx;

export function CtxProvider({ children }) {
  const [burgerOpen, setBurgerOpen] = useState("");
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <Ctx.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        burgerOpen,
        toggleBurger,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
