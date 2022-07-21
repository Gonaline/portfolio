import axios from "axios";
import { useEffect, useState } from "react";
import Project3 from "@components/project3/allProducts";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import Nav from "@components/project3/nav";
import SPage from "@pages/style";

export default function PageProject3() {
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
          <Project3
            backgroundColor={page.color2}
            subMenuColor={page.color3}
            navColor={page.color4}
          />
        </div>
      </div>
      <Header backgroundColor={page.color1} />
      <Burger color={page.color1} />
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
