import PropTypes from "prop-types";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImg from "./productImg";
import Colors from "./options/colors";
import Colors2 from "./options/colors2";
import Option from "./options/option";
import Mirror from "./options/mirror";
import CategoryTitle from "../categoryTitle";
import ProductCard from "../productCard";

import SProduct from "./style";

export default function Product({
  color1,
  color2,
  whiteOpacity,
  color4,
  darkColor,
}) {
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
  const [mainCategoryImg, setMainCategoryImg] = useState("");
  const [products, setProducts] = useState([]);

  const imgLink = "/src/assets/pictures/project3/products/";
  const imgCategLink = "/src/assets/pictures/project3/";

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
        //
        setProducts(data);
        setMainCategoryName(data[0].categoryName);
        setMainCategoryImg(data[0].categoryImg);
      });
  }, [mainCategoryId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <SProduct
      backgroundColor={color2}
      darkColor={darkColor}
      whiteOpacity={whiteOpacity}
    >
      <div className="rightMobile">
        <h2 className="title">{sticker.name}</h2>
        <p className="collection">Collection : {mainCategoryName}</p>
        <p className="introduction">{sticker.introduction}</p>
      </div>
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
          whiteOpacity={whiteOpacity}
          borderColor={color1}
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
            whiteOpacity={whiteOpacity}
            borderColor={color1}
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
            whiteOpacity={whiteOpacity}
            borderColor={color1}
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
            whiteOpacity={whiteOpacity}
            borderColor={color1}
            mirrorChoice={mirrorChoice}
            setMirrorChoice={setMirrorChoice}
          />
        )}
        <p className="size">Format : {sticker.textSize}</p>
        <p className="price">Prix : {sticker.price}€</p>
      </div>
      <CategoryTitle
        categoryImgLink={`${imgCategLink}${mainCategoryImg}.png`}
        categoryName={mainCategoryName}
        whiteOpacity={whiteOpacity}
      />
      <section className="list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={`/src/assets/pictures/project3/products/${product.id}.png`}
            name={product.name}
            color1={color1}
            color2={color2}
            whiteOpacity={whiteOpacity}
            color4={color4}
            darkColor={darkColor}
          />
        ))}
      </section>
    </SProduct>
  );
}

Product.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  whiteOpacity: PropTypes.string.isRequired,
  color4: PropTypes.string.isRequired,
  darkColor: PropTypes.string.isRequired,
};
