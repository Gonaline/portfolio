import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const project3Ctx = createContext();
export default project3Ctx;

export function CtxProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3product"}`)
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3category"}`)
      .then(({ data }) => {
        setCategories(data);
      });
  }, []);

  return (
    <project3Ctx.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        products,
        categories,
      }}
    >
      {children}
    </project3Ctx.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
