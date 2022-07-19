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
  const [bigImg, setBigImg] = useState(id);
  const [optionId, setOptionId] = useState("");
  const [options, setOptions] = useState([]);
  const [optionName, setOptionName] = useState("");
  const [optionChoice, setOptionChoice] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3product/"}${id}`)
      .then(({ data }) => {
        setSticker(data);
        setOptionId(data.option_Id);
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

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}${"/p3optionbyproduct/"}${optionId}`
      )
      .then(({ data }) => {
        if (sticker.option_Id === 0) {
          setOptionChoice("");
        } else {
          setOptions(data);
          setOptionChoice(data[0].codeImg);
          setOptionName(data[0].optionName);
        }
      });
  }, [optionId]);

  const imgLink = "../src/assets/pictures/project3/products/";
  const test = `${imgLink}${id}${optionChoice}${sticker.fixedColor}${colorChoice}${colorChoice2}.png`;
  // console.log(bib);
  // console.log(`${imgLink}${bigImg}.png`);

  return (
    <SProduct
      color1={colorChoice}
      backgroundColor={backgroundColor}
      photo={`${imgLink}${id}.png`}
      bigImg={`${imgLink}${bigImg}.png`}
      technicalSheet={`${imgLink}${id}_ft.png`}
      technicalSheet2={`${imgLink}${id}_ft_2.png`}
      mirror={sticker.mirror}
      ftNumber={sticker.ftNumber}
    >
      <section className="bigImg">
        <button
          className={
            sticker.photoNumber > 0 && `${id}` !== `${bigImg}`
              ? "hover photo"
              : "none"
          }
          type="button"
          aria-label="Save"
          onClick={() => {
            setBigImg(`${id}`);
          }}
        />
        <button
          className={
            `${bigImg}` !== `${id}_ft` ? "hover technicalSheet" : "none"
          }
          type="button"
          aria-label="Save"
          onClick={() => {
            setBigImg(`${id}_ft`);
          }}
        />
        <button
          className={
            sticker.ftNumber > 1 && `${bigImg}` !== `${id}_ft_2`
              ? "hover technicalSheet2"
              : "none"
          }
          type="button"
          aria-label="Save"
          onClick={() => {
            setBigImg(`${id}_ft_2`);
          }}
        />
        <div />
      </section>

      <div className="right">
        <p>{bigImg}</p>
        <p>{test}</p>
        <h2>{sticker.name}</h2>
        <h4>{sticker.introduction}</h4>
        {sticker.option_Id > 0 && (
          <div className="option">
            <p>{optionName}</p>
            <p>{sticker.option_Id}</p>

            {options.map((option) => {
              return (
                <button
                  type="button"
                  value={option.optionDetailName}
                  onClick={() => {
                    setOptionChoice(option.codeImg);
                    setBigImg(
                      `${sticker.id}${option.codeImg}${
                        !sticker.fixedColor ? "" : sticker.fixedColor
                      }${colorChoice}${colorChoice2}
                      `
                    );
                  }}
                >
                  <img
                    className="imgOption"
                    alt={option.name}
                    src={`../src/assets/pictures/project3/options/${option.codeImg}.png`}
                  />
                  <div className="textColor">
                    <p>{option.name}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
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
                    setBigImg(
                      `${sticker.id}${optionChoice}${
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

          {sticker.colorChoiceNumber !== 1 && (
            <div className="choices2">
              {colors2.map((color) => {
                return (
                  <button
                    key={color.name}
                    type="button"
                    value={color.name}
                    onClick={() => {
                      setColorChoice2(color.img);
                      setBigImg(
                        `${sticker.id}${optionChoice}${
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
          )}
          <h1>{`${imgLink}${id}${optionChoice}${sticker.fixedColor}${colorChoice}${colorChoice2}.png`}</h1>
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
