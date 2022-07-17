import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SProduct from "./style";

export default function Product({ backgroundColor }) {
  const { id } = useParams();
  const [sticker, setSticker] = useState([]);
  const [colorChoice, setColorChoice] = useState("");
  const [imageName, setImageName] = useState(id);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3product/"}${id}`)
      .then(({ data }) => {
        setSticker(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3colorsbyproduct/"}${id}`)
      .then(({ data }) => {
        setColors(data);
      });
  }, []);

  return (
    <SProduct
      color1={colorChoice}
      id={sticker.id}
      backgroundColor={backgroundColor}
      img={`../src/assets/pictures/project3/${imageName}.png`}
      technicalSheet={`../src/assets/pictures/project3/technicalSheet/${id}_ft.png`}
      mirror={sticker.mirror}
      ftNumber={sticker.ftNumber}
    >
      <section className="img">
        <div firstImg="bigImg" />
        <div className="technicalSheet" />
      </section>

      <div className="right">
        <h2>{sticker.name}</h2>
        <h4>{sticker.introduction}</h4>
        <div className="colorsChoice1">
          <h5>Choix du coloris : {colorChoice}</h5>
          <div className="choices">
            {colors.map((color) => {
              return (
                <button
                  key={color.name}
                  type="button"
                  value={color.name}
                  onClick={() => {
                    setColorChoice(color.name);
                    setImageName(`${sticker.id}_${color.name}`);
                  }}
                >
                  <img
                    className="imgColor"
                    alt={color.name}
                    src={`../src/assets/pictures/project3/colors/${color.name}.png`}
                  />
                  <div className="textColor">
                    <p>{color.name}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <h6>Format : {sticker.textSize}</h6>

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
