import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SProject2 from "./style";

export default function Project2({ backgroundColor }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/project2"}`)
      .then(({ data }) => {
        setImg(data);
      });
  }, []);

  return (
    <SProject2 backgroundColor={backgroundColor}>
      <div>
        <div className="container">
          {img.map((image) => (
            <div className="box">
              <img
                src={`./src/assets/pictures/project2/${image.img}`}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </SProject2>
  );
}

Project2.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
