import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import project3Ctx from "@services/context/project3Ctx";
import SNav from "./style";

export default function Nav({ navColor, subMenuColor }) {
  const { categories } = useContext(project3Ctx);

  return (
    <SNav navColor={navColor} subMenuColor={subMenuColor}>
      <div className="menu categories">
        <div className="title">
          <h3>CATEGORIES</h3>
        </div>
        <div className="submenu">
          <div className="ul">
            {categories.map((category) => (
              <Link to="/about" className="link">
                <div className="category" id={category.id}>
                  <img
                    src={`./src/assets/pictures/project3/${category.categoryImg}.png`}
                    alt={category.id}
                  />
                  <h4>{category.categoryName}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SNav>
  );
}

Nav.propTypes = {
  navColor: PropTypes.string.isRequired,
  subMenuColor: PropTypes.string.isRequired,
};
