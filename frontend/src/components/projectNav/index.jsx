import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SProjectNav from "./style";

export default function Nav({ color }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page"}`)
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  return (
    <SProjectNav color={color}>
      <ul>
        {projects
          .filter((project) => project.id.substr(0, 7) === "project")
          .map((project) => {
            return (
              <li key={project.id}>
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  to={`/${project.id}`}
                >
                  {project.projectNumber}
                </Link>
              </li>
            );
          })}
      </ul>
    </SProjectNav>
  );
}

Nav.propTypes = {
  color: PropTypes.string.isRequired,
};
