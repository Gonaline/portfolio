import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ProductCard from "../productCard";

import SListProductsOfCateg from "./style";

export default function ListProductsOfCateg({
  backgroundColor,
  mainCategoryId,
}) {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  const ImgLink = "../src/assets/pictures/project3/";

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }${"/p3productbycategory/"}${mainCategoryId}`
      )
      .then(({ data }) => {
        setProducts(data);
        setCategoryName(data[0].categoryName);
        setCategoryImg(data[0].categoryImg);
      });
  }, [mainCategoryId]);

  return (
    <SListProductsOfCateg
      backgroundColor={backgroundColor}
      imgCollection={`${ImgLink}${categoryImg}.png`}
    >
      <h3>Autres produits de la collection {categoryName}</h3>
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
    </SListProductsOfCateg>
  );
}

ListProductsOfCateg.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  mainCategoryId: PropTypes.string.isRequired,
};
