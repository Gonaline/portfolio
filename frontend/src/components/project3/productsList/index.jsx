import PropTypes from "prop-types";
import { useContext } from "react";
import project3Ctx from "@services/context/project3Ctx";
import SProductList from "./style";

export default function ProductList({ backgroundColor }) {
  const { products } = useContext(project3Ctx);

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
