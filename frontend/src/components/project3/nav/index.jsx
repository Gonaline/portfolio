import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SNav from "./style";

export default function Nav({
  clearColor,
  darkColor,
  whiteOpacity,
  darkOpacity,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3category"}`)
      .then(({ data }) => {
        setCategories(data);
      });
  }, []);

  return (
    <SNav
      clearColor={clearColor}
      darkColor={darkColor}
      whiteOpacity={whiteOpacity}
      darkOpacity={darkOpacity}
    >
      <section>
        <div className="menu categories">
          <div className="title">
            <h3>COLLECTIONS</h3>
          </div>
          <div className="submenu">
            {categories.map((category) => (
              <NavLink
                to={`/project3/${category.id}`}
                className="link"
                id={category.id}
              >
                <div className="category">
                  <img
                    src={`/src/assets/pictures/project3/${category.categoryImg}.png`}
                    alt={category.categoryName}
                  />
                  <h4>{category.categoryName}</h4>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </SNav>
  );
}

Nav.propTypes = {
  clearColor: PropTypes.string.isRequired,
  darkColor: PropTypes.string.isRequired,
  whiteOpacity: PropTypes.string.isRequired,
  darkOpacity: PropTypes.string.isRequired,
};
