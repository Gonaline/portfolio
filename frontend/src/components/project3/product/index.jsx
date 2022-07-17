import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SProduct from "./style";

export default function Product({ backgroundColor }) {
  const { id } = useParams();
  const [sticker, setSticker] = useState([]);
  const [colors, setColors] = useState([]);
  const [colors2, setColors2] = useState([]);
  const [colorChoice, setColorChoice] = useState("");
  const [colorChoice2, setColorChoice2] = useState("");
  const [imageName, setImageName] = useState(id);

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
        setColorChoice(data[0].img);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3colors2byproduct/"}${id}`)
      .then(({ data }) => {
        if (sticker.colorChoiceNumber === 1) {
          setColorChoice2("");
        } else {
          setColors2(data);
          setColorChoice2(data[0].img);
        }
      });
  }, []);

  return (
    <SProduct
      color1={colorChoice}
      id={sticker.id}
      backgroundColor={backgroundColor}
      img={`../src/assets/pictures/project3/products/${imageName}.png`}
      technicalSheet={`../src/assets/pictures/project3/technicalSheet/${id}_ft.png`}
      technicalSheet2={
        sticker.ftNumber === 1
          ? ""
          : `../src/assets/pictures/project3/technicalSheet/${id}_ft_2.png`
      }
      mirror={sticker.mirror}
      ftNumber={sticker.ftNumber}
    >
      <section className="img">
        <div firstImg="bigImg" />
        <div className="technicalSheet" />
        <div className="technicalSheet2" />
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
                    setColorChoice(color.img);
                    setImageName(
                      `${sticker.id}${
                        !sticker.fixedColor ? "" : sticker.fixedColor
                      }${color.img}${
                        sticker.colorChoiceNumber === 1 ? "" : colorChoice2
                      }`
                    );
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

          <div className="choices2">
            {colors2.map((color) => {
              return (
                <button
                  key={color.name}
                  type="button"
                  value={color.name}
                  onClick={() => {
                    setColorChoice2(color.img);
                    setImageName(
                      `${sticker.id}${
                        !sticker.fixedColor ? "" : sticker.fixedColor
                      }${colorChoice}${color.img}`
                    );
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
          <h1>{`../src/assets/pictures/project3/products/${imageName}.png`}</h1>
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
