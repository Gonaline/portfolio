import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SProject1 from "./style";

export default function Project2({
  // color,
  backgroundColor,
  // otherColor,
  // flashColor,
  // title,
}) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/project2"}`)
      .then(({ data }) => {
        setImg(data);
      });
  }, []);

  return (
    <SProject1 backgroundColor={backgroundColor}>
      <section>
        <div className="container">
          {img.map((image) => (
            <div className="box">
              <img
                src={`./src/assets/pictures/project2/${image.img}`}
                alt={image.alt}
              />
              <span>{image.text}</span>
            </div>
          ))}
        </div>
      </section>
    </SProject1>
  );
}

Project2.propTypes = {
  // title: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  // otherColor: PropTypes.string.isRequired,
  // flashColor: PropTypes.string.isRequired,
};
