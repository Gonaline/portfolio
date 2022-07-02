import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header({ color }) {
  return (
    <SHeader color={color}>
      <div className="me">
        <Link to="/about" className="link" style={{ textDecoration: "none" }}>
          <h1>Aline Gonce</h1>
        </Link>
      </div>
      <nav>
        <ul className="nav1">
          <Link to="/about" className="link" style={{ textDecoration: "none" }}>
            <li className="nav1li">ABOUT</li>
          </Link>
        </ul>
      </nav>
    </SHeader>
  );
}
Header.propTypes = {
  color: PropTypes.string.isRequired,
};
