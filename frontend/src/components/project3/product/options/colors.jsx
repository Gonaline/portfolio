import PropTypes from "prop-types";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SColors from "./style";

export default function Colors({
  optionChoice,
  fixedColor,
  colors,
  setColors,
  colorChoice,
  setColorChoice,
  colorChoice2,
  setBigImg,
}) {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3colorsbyproduct/"}${id}`)
      .then(({ data }) => {
        setColors(data);
        setColorChoice(data[0].img);
      });
  }, []);

  return (
    <SColors>
      <>
        <div className="titleOfOption">
          <h5>Choix du coloris : {colorChoice}</h5>
        </div>
        <div className="choice">
          {colors.map((color) => {
            return (
              <button
                key={color.name}
                type="button"
                value={color.name}
                onClick={() => {
                  setColorChoice(color.img);
                  setBigImg(
                    `${id}${optionChoice}${fixedColor}${color.img}${colorChoice2}`
                  );
                }}
              >
                <img
                  className="imgOption"
                  alt={color.name}
                  src={`../src/assets/pictures/project3/colors/${color.name}.png`}
                />
                <div className="textOption">
                  <p>{color.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </>
    </SColors>
  );
}

Colors.propTypes = {
  optionChoice: PropTypes.string.isRequired,
  fixedColor: PropTypes.string.isRequired,
  colors: PropTypes.string.isRequired,
  setColors: PropTypes.func.isRequired,
  colorChoice: PropTypes.string.isRequired,
  setColorChoice: PropTypes.func.isRequired,
  colorChoice2: PropTypes.string.isRequired,
  setBigImg: PropTypes.func.isRequired,
};
