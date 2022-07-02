import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header({ backgroundColor }) {
  return (
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
  );
}
Header.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
