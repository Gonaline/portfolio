import PropTypes from "prop-types";
import { useContext } from "react";
import project3Ctx from "@services/context/project3Ctx";
import ProductCard from "../productCard";

import SProductList from "./style";

export default function ProductList({ backgroundColor }) {
  const { products } = useContext(project3Ctx);

  return (
    <SProductList backgroundColor={backgroundColor}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          img={`../src/assets/pictures/project3/products/${product.id}.png`}
          name={product.name}
        />
      ))}
    </SProductList>
  );
}

ProductList.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
