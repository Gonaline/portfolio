import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard";

import SProject3 from "./style";

export default function Project3({ backgroundColor }) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  const ImgLink = "../src/assets/pictures/project3/";

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/p3productbycategory/"}${id}`)
      .then(({ data }) => {
        setProducts(data);
        setCategoryName(data[0].categoryName);
        setCategoryImg(data[0].categoryImg);
      });
  }, [id]);

  return (
    <SProject3
      backgroundColor={backgroundColor}
      imgCollection={`${ImgLink}${categoryImg}.png`}
    >
      <div className="imgCollection">
        <img src={`${ImgLink}${categoryImg}.png`} alt="" />
        <h3>{categoryName}</h3>
      </div>
      <section className="list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={`/src/assets/pictures/project3/products/${product.id}.png`}
            name={product.name}
          />
        ))}
      </section>
    </SProject3>
  );
}

Project3.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
