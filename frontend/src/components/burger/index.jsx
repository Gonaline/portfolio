import PropTypes from "prop-types";
import { useContext } from "react";
import Ctx from "@services/context/Ctx";
import { Link } from "react-router-dom";
import Logo from "@assets/pictures/project1/rock.png";
import SBurger from "./style";

export default function Burger({ ...props }) {
  const { burgerOpen, toggleBurger } = useContext(Ctx);

  return (
    <SBurger isOpen={burgerOpen} onClick={toggleBurger} color={props.color}>
      <img className="choice" src={Logo} alt="logo" />

      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <div className="Nav">
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
      </div>
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
