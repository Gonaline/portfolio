import PropTypes from "prop-types";
import ProductList from "./productsList";
import Nav from "./nav";
import SProject3 from "./style";

export default function Project3({ backgroundColor, navColor, subMenuColor }) {
  return (
    <SProject3 backgroundColor={backgroundColor}>
      <div>
        <Nav navColor={navColor} subMenuColor={subMenuColor} />
      </div>
      <ProductList />
    </SProject3>
  );
}

Project3.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  navColor: PropTypes.string.isRequired,
  subMenuColor: PropTypes.string.isRequired,
};
