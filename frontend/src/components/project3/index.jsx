import PropTypes from "prop-types";
import ProductList from "./productsList";
import SProject3 from "./style";

export default function Project3({ backgroundColor }) {
  return (
    <SProject3 backgroundColor={backgroundColor}>
      <ProductList />
    </SProject3>
  );
}

Project3.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
