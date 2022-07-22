import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "@components/project3/product";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import Nav from "@components/project3/nav";
import SPage from "@pages/styleProject3";

export default function PageProject3Product() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page/project3"}`)
      .then(({ data }) => {
        setPage(data);
      });
  }, []);

  return (
    <SPage backgroundColor={page.color2}>
      <div className="main">
        <div className="flexRight">
          <Nav openColor={page.color2} whiteOpacity={page.color3} />
          <Product
            color1={page.color1}
            color2={page.color2}
            whiteOpacity={page.color3}
            color4={page.color4}
            darkColor={page.color5}
          />
        </div>
        <Left
          title={page.title}
          subtitle={page.subtitle}
          description={page.description}
          textColor={page.color1}
        />
      </div>
      <Header backgroundColor={page.color1} />
      <Burger color={page.color1} />
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
