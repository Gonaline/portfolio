import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import SProductCard from "./style";

export default function ProductCard({
  img,
  name,
  id,
  color1,
  color4,
  darkColor,
  whiteOpacity,
}) {
  const navigate = useNavigate();

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }

  return (
    <SProductCard
      img={img}
      color1={color1}
      color4={color4}
      darkColor={darkColor}
      whiteOpacity={whiteOpacity}
    >
      <Link
        to={`/project3/product/${id}`}
        onClick={() => changeLocation(`/project3/product/${id}`)}
        className="link container"
      >
        <div className="text">
          <h3>{name}</h3>
        </div>
        <div className="add">
          <p>+</p>
        </div>
      </Link>
      <div className="mobileText">
        <h3>{name}</h3>
      </div>
    </SProductCard>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color4: PropTypes.string.isRequired,
  darkColor: PropTypes.string.isRequired,
  whiteOpacity: PropTypes.string.isRequired,
};
