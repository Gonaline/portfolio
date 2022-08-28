import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryTitle from "../categoryTitle";

import ProductCard from "../productCard";

import SProject3 from "./style";

export default function Project3({
  color1,
  color2,
  whiteOpacity,
  color4,
  darkColor,
}) {
  const { id = "" } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  const imgCategLink = "/src/assets/pictures/project3/";

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3productbycategory/"}${id}`)
      .then(({ data }) => {
        setProducts(data);
        setCategoryName(data[0].categoryName);
        setCategoryImg(data[0].categoryImg);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SProject3 backgroundColor={color2}>
      <CategoryTitle
        categoryImgLink={`${imgCategLink}${categoryImg}.png`}
        categoryName={categoryName}
        backgroundColor={color2}
        displayH5="none"
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
        <div className="empty" />
        <div className="empty" />
        <div className="empty" />
      </section>
    </SProject3>
  );
}

Project3.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  whiteOpacity: PropTypes.string.isRequired,
  color4: PropTypes.string.isRequired,
  darkColor: PropTypes.string.isRequired,
};
