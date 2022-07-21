import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SProductCard from "./style";

export default function ProductCard({ backgroundColor, img, name, id }) {
  return (
    <SProductCard backgroundColor={backgroundColor} img={img}>
      <Link to={`/project3/product/${id}`} className="link container">
        <div className="text">
          <h3>{name}</h3>
        </div>
        <div className="add">
          <p>+</p>
        </div>
      </Link>
    </SProductCard>
  );
}

ProductCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
