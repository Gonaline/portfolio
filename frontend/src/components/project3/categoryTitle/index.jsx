import PropTypes from "prop-types";
import SCategoryTitle from "./style";

export default function CategoryTitle({
  background,
  categoryName,
  categoryImgLink,
  whiteOpacity,
}) {
  return (
    <SCategoryTitle background={background} whiteOpacity={whiteOpacity}>
      <div className="otherProducts">
        <img src={categoryImgLink} alt="category" />
        <h3>{categoryName}</h3>
        <h5>autres produits de la collection...</h5>
      </div>
    </SCategoryTitle>
  );
}

CategoryTitle.propTypes = {
  categoryName: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  categoryImgLink: PropTypes.string.isRequired,
  whiteOpacity: PropTypes.string.isRequired,
};
