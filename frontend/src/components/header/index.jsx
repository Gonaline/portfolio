import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SHeader from "./style";

export default function Header({ backgroundColor }) {
  return (
    <SHeader backgroundColor={backgroundColor}>
      <section>
        <div className="me">
          <NavLink to="/about" className="link">
            <h1>Aline Gonce</h1>
          </NavLink>
        </div>

        <div className="right">
          <div className="categories">
            <NavLink to="/about" className="link">
              <div className="title">
                <h3>ABOUT</h3>
              </div>
            </NavLink>
          </div>
          <div className="categories">
            <div className="title">
              <h3>PROJECTS</h3>
            </div>
            <div className="submenu">
              <NavLink to="/project1" className="link">
                <div className="project">
                  <h4>PROJECT#1</h4>
                </div>
              </NavLink>
              <NavLink to="/project2" className="link">
                <div className="project">
                  <h4>PROJECT#2</h4>
                </div>
              </NavLink>
              <NavLink to="/project3/0" className="link">
                <div className="project">
                  <h4>PROJECT#3</h4>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </SHeader>
  );
}

Header.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
