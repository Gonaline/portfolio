import PropTypes from "prop-types";
import { useContext } from "react";
import Ctx from "@services/context/Ctx";
import { Link } from "react-router-dom";
import Logo from "@assets/pictures/logo.svg";
import SBurger from "./style";

export default function Burger({ ...props }) {
  const { burgerOpen, toggleBurger } = useContext(Ctx);

  return (
    <SBurger isOpen={burgerOpen} onClick={toggleBurger} color={props.color}>
      <div className="logo">
        <Link className="link" to="/about">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <button
        type="button"
        onClick={toggleBurger}
        className={`hamburger ${burgerOpen}`}
      >
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </button>

      <ul>
        <li>
          <Link className="link" to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="link" to="/project1">
            PROJECT#1
          </Link>
        </li>
        <li>
          <Link className="link" to="/project2">
            PROJECT#2
          </Link>
        </li>
      </ul>
    </SBurger>
  );
}
Burger.propTypes = {
  burger: PropTypes.bool,
  func: PropTypes.func,
  color: PropTypes.string.isRequired,
};
Burger.defaultProps = {
  burger: false,
  func: () => {},
};
