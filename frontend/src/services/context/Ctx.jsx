import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const test = "aline";
  const [page, setPage] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page"}`)
      .then(([data]) => {
        setPage(data);
      });
  }, []);

  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        test,
        page,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
