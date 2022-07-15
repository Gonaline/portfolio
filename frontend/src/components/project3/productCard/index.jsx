import PropTypes from "prop-types";
import SProductCard from "./style";

export default function ProductCard({ backgroundColor, img, name }) {
  return (
    <SProductCard backgroundColor={backgroundColor} img={img}>
      <div className="container">
        <div className="text">
          <h3>{name}</h3>
        </div>
        <div className="add">
          <p>+</p>
        </div>
      </div>
    </SProductCard>
  );
}

ProductCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
