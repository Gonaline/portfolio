import PropTypes from "prop-types";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SOption from "./style";

export default function Option({
  optionId,
  options,
  setOptions,
  optionChoice,
  setOptionChoice,
  optionName,
  setOptionName,
  fixedColor,
  setBigImg,
  colorChoice,
  colorChoice2,
}) {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}${"/p3optionbyproduct/"}${optionId}`
      )
      .then(({ data }) => {
        setOptions(data);
        setOptionChoice(data[0].codeImg);
        setOptionName(data[0].optionName);
      });
  }, [optionId]);

  return (
    <SOption>
      <>
        <div className="titleOfOption">
          <h5>
            nom option : {optionName}
            {optionChoice}
          </h5>
        </div>
        <div className="choice">
          {options.map((option) => {
            return (
              <button
                key={option.name}
                type="button"
                value={option.optionDetailName}
                onClick={() => {
                  setOptionChoice(option.codeImg);
                  setBigImg(
                    `${id}${option.codeImg}${fixedColor}${colorChoice}${colorChoice2}`
                  );
                }}
              >
                <img
                  className="imgOption"
                  alt={option.name}
                  src={`/src/assets/pictures/project3/options/${option.codeImg}.png`}
                />
                <div className="textOption">
                  <p>{option.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </>
    </SOption>
  );
}

Option.propTypes = {
  optionId: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
  setOptions: PropTypes.func.isRequired,
  optionChoice: PropTypes.string.isRequired,
  setOptionChoice: PropTypes.func.isRequired,
  optionName: PropTypes.string.isRequired,
  setOptionName: PropTypes.func.isRequired,
  fixedColor: PropTypes.string.isRequired,
  setBigImg: PropTypes.func.isRequired,
  colorChoice: PropTypes.string.isRequired,
  colorChoice2: PropTypes.string.isRequired,
};
