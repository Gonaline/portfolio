import PropTypes from "prop-types";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SProjectNav from "./style";

export default function Nav({ color, colorHover }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page"}`)
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  return (
    <SProjectNav color={color} colorHover={colorHover}>
      <ul>
        {projects
          .filter((project) => project.id.substr(0, 7) === "project")
          .map((project) => {
            return (
              <li key={project.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link linkActive" : "link"
                  }
                  to={`/${project.id}`}
                >
                  {project.projectNumber}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </SProjectNav>
  );
}

Nav.propTypes = {
  color: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
};
