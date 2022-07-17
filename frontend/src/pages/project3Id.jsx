import axios from "axios";
import { useEffect, useState } from "react";
import Product from "@components/project3/product";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import SPage from "@pages/style";

export default function PageProject3Id() {
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
          <Product
            // color={page.color1}
            backgroundColor={page.color2}
            // subMenuColor={page.color3}
            // navColor={page.color4}
            // title={page.title}
          />
        </div>
      </div>
      <Header backgroundColor={page.color1} />
      <Burger color={page.color1} />
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
