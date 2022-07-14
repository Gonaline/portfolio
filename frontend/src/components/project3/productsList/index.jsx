import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SProductList from "./style";

export default function ProductList({ backgroundColor }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3product"}`)
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  return (
    <SProductList backgroundColor={backgroundColor}>
      {products.map((product) => (
        <div className="product">
          <img
            className="choice"
            src={`./src/assets/pictures/project3/${product.id}.png`}
            alt={product.id}
          />
        </div>
      ))}
    </SProductList>
  );
}

ProductList.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
