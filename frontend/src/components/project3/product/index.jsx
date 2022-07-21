import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImg from "./productImg";
import Colors from "./options/colors";
import Colors2 from "./options/colors2";
import Nav from "../nav";
import Option from "./options/option";
import Mirror from "./options/mirror";
import SProduct from "./style";

export default function Product({ backgroundColor, color }) {
  const { id } = useParams();
  const [sticker, setSticker] = useState([]);
  const [fixedColorsName, setFixedColorsName] = useState("");
  const [optionId, setOptionId] = useState(0);
  const [colors, setColors] = useState([]);
  const [colorChoice, setColorChoice] = useState("");
  const [colors2, setColors2] = useState([]);
  const [colorChoice2, setColorChoice2] = useState("");
  const [optionName, setOptionName] = useState("");
  const [options, setOptions] = useState([]);
  const [optionChoice, setOptionChoice] = useState("");
  const [mirrorChoice, setMirrorChoice] = useState(false);
  const [bigImg, setBigImg] = useState(id);
  const [mainCategoryId, setMainCategoryId] = useState(0);
  const [mainCategoryName, setMainCategoryName] = useState("");

  const imgLink = "/src/assets/pictures/project3/products/";

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3product/"}${id}`)
      .then(({ data }) => {
        setSticker(data);
        setFixedColorsName(data.fixedColor);
        setOptionId(data.option_Id);
        setMainCategoryId(data.mainCategory_id);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }${"/p3productbycategory/"}${mainCategoryId}`
      )
      .then(({ data }) => {
        setMainCategoryName(data[0].categoryName);
      });
  }, [mainCategoryId]);

  return (
    <SProduct backgroundColor={backgroundColor} color={color}>
      <Nav navColor={backgroundColor} subMenuColor={backgroundColor} />
      <ProductImg
        sticker={sticker}
        bigImg={bigImg}
        bigImgOrientation={mirrorChoice}
        setBigImg={setBigImg}
        imgLink={imgLink}
      />
      <div className="right">
        <h2 className="title">{sticker.name}</h2>
        <p className="collection">Collection : {mainCategoryName}</p>
        <p className="introduction">{sticker.introduction}</p>
        <Colors
          optionChoice={optionChoice}
          fixedColor={fixedColorsName === null ? "" : `_${fixedColorsName}`}
          colors={colors}
          setColors={setColors}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
          colorChoice2={colorChoice2}
          setBigImg={setBigImg}
        />
        {sticker.colorChoiceNumber !== 1 && (
          <Colors2
            optionChoice={optionChoice}
            fixedColor={fixedColorsName === null ? "" : `_${fixedColorsName}`}
            colorChoice={colorChoice}
            colors2={colors2}
            setColors2={setColors2}
            colorChoice2={colorChoice2}
            setColorChoice2={setColorChoice2}
            setBigImg={setBigImg}
          />
        )}
        {sticker.option_Id > 0 && (
          <Option
            optionId={optionId}
            options={options}
            setOptions={setOptions}
            optionChoice={optionChoice}
            setOptionChoice={setOptionChoice}
            optionName={optionName}
            setOptionName={setOptionName}
            setBigImg={setBigImg}
            fixedColor={fixedColorsName === null ? "" : `_${fixedColorsName}`}
            colorChoice={colorChoice}
            colorChoice2={colorChoice2}
          />
        )}
        {sticker.mirror === 1 && (
          <Mirror
            mirrorChoice={mirrorChoice}
            setMirrorChoice={setMirrorChoice}
          />
        )}
        <p className="size">Format : {sticker.textSize}</p>
        <p className="price">Prix : {sticker.price}€</p>
      </div>
    </SProduct>
  );
}

Product.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
