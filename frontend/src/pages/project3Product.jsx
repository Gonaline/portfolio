import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "@components/project3/product";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import Nav from "@components/project3/nav";
import SPage from "@pages/style";

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
    <SPage>
      <div className="main">
        <Left
          title={page.title}
          subtitle={page.subtitle}
          description={page.description}
          textColor={page.color1}
        />
        <div className="flexRight">
          <Nav
            darkColor={page.color1}
            clearColor={page.color2}
            whiteOpacity={page.color3}
            darkOpacity={page.color4}
          />
          <Product color={page.color1} backgroundColor={page.color2} />
        </div>
      </div>
      <Header backgroundColor={page.color1} />
      <Burger color={page.color1} />
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
