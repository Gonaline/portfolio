import axios from "axios";
import { useEffect, useState } from "react";
import About from "@components/about";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import SPage from "@pages/style";

export default function PageAbout() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page/about"}`)
      .then(({ data }) => {
        setPage(data);
      });
  }, []);

  return (
    <SPage>
      <Header backgroundColor={page.color1} />
      <Burger color={page.color1} />
      <div className="main">
        <Left
          title={page.title}
          subtitle={page.subtitle}
          description={page.description}
          textColor={page.color1}
        />
        <div className="fixedRight">
          <About
            backgroundColor={page.color2}
            title={page.title}
            colorButton={page.colorButton}
          />
        </div>
      </div>
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
