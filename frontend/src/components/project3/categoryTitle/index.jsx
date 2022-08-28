import PropTypes from "prop-types";
import SCategoryTitle from "./style";

export default function CategoryTitle({
  backgroundColor,
  categoryName,
  categoryImgLink,
  displayH5,
}) {
  return (
    <SCategoryTitle backgroundColor={backgroundColor} displayH5={displayH5}>
      <div className="otherProducts">
        <img src={categoryImgLink} alt="category" />
        <h3>{categoryName}</h3>
        <h5 className={displayH5}>autres produits de la collection...</h5>
      </div>
    </SCategoryTitle>
  );
}

CategoryTitle.propTypes = {
  categoryName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  categoryImgLink: PropTypes.string.isRequired,
  displayH5: PropTypes.string.isRequired,
};
