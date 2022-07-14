import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SProject3 from "./style";

export default function Project3({ backgroundColor }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/project3"}`)
      .then(({ data }) => {
        setCategories(data);
      });
  }, []);

  return (
    <SProject3 backgroundColor={backgroundColor}>
      <div>{categories.id}</div>
    </SProject3>
  );
}

Project3.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
