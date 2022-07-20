import PropTypes from "prop-types";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SColors2 from "./style";

export default function Colors2({
  optionChoice,
  fixedColor,
  colorChoice,
  colors2,
  setColors2,
  colorChoice2,
  setColorChoice2,
  setBigImg,
}) {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3colors2byproduct/"}${id}`)
      .then(({ data }) => {
        setColors2(data);
        setColorChoice2(data[0].img);
      });
  }, []);

  return (
    <SColors2>
      <>
        <div className="titleOfOption">
          <h5>Choix du coloris : {colorChoice2}</h5>
        </div>
        <div className="choice">
          {colors2.map((color) => {
            return (
              <button
                key={color.name}
                type="button"
                value={color.name}
                onClick={() => {
                  setColorChoice2(color.img);
                  setBigImg(
                    `${id}${optionChoice}${fixedColor}${colorChoice}${color.img}`
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
    </SColors2>
  );
}

Colors2.propTypes = {
  optionChoice: PropTypes.string.isRequired,
  fixedColor: PropTypes.string.isRequired,
  colorChoice: PropTypes.string.isRequired,
  colors2: PropTypes.string.isRequired,
  setColors2: PropTypes.func.isRequired,
  colorChoice2: PropTypes.string.isRequired,
  setColorChoice2: PropTypes.func.isRequired,
  setBigImg: PropTypes.func.isRequired,
};
