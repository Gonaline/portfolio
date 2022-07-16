import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SProduct from "./style";

export default function Product({ backgroundColor }) {
  const { id } = useParams();

  const [sticker, setSticker] = useState([]);
  const [color1, setColor1] = useState("");
  const [imageName, setImageName] = useState(id);

  const colors = [
    "brun-clair",
    "lavande",
    "jaune-or",
    "menthe",
    "vert-tilleul",
    "turquoise",
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3product/"}${id}`)
      .then(({ data }) => {
        setSticker(data);
      });
  }, []);

  return (
    <SProduct
      color1={color1}
      id={sticker.id}
      backgroundColor={backgroundColor}
      firstImg={`../src/assets/pictures/project3/${id}.png`}
      img={`../src/assets/pictures/project3/${imageName}.png`}
      technicalSheet={`../src/assets/pictures/project3/technicalSheet/${imageName}_ft.png`}
      mirror={sticker.mirror}
      ftNumber={sticker.ftNumber}
    >
      <section className="img">
        <div firstImg="firstImg" />
        <div className="technicalSheet" />
      </section>
      <div className="right">
        <h2>{sticker.name}</h2>
        <p>{`../src/assets/pictures/project3/${id}.png`}</p>
        <p>{imageName}</p>
        <h4>{sticker.introduction}</h4>
        <h6>Format : {sticker.textSize}</h6>
        <div>
          <h6>Choix du coloris : </h6>
          <div className="colors">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                value={color}
                onClick={() => {
                  setColor1(color);
                  setImageName(`${sticker.id}_${color}`);
                }}
              >
                <img
                  alt={color}
                  src={`../src/assets/pictures/project3/colors/${color}.png`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="price">
          <p>{sticker.price}€</p>
        </div>
      </div>
    </SProduct>
  );
}

Product.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
