import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "@components/burger";
import SHeader from "./style";

export default function Header({ backgroundColor }) {
  const [burgerOpen, setBurgerOpen] = useState("red");
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <SHeader backgroundColor={backgroundColor}>
        <div className="me">
          <Link to="/about" className="link">
            <h1>Aline Gonce</h1>
          </Link>
        </div>
        <nav>
          <div className="nav1">
            <Link to="/about" className="link">
              <h3>ABOUT</h3>
            </Link>
            <Link to="/project1" className="link">
              <h3>PROJECTS</h3>
            </Link>
          </div>
        </nav>
      </SHeader>
      <Burger burger={burgerOpen} func={toggleBurger} />
    </>
  );
}
Header.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
