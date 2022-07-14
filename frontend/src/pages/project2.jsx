import axios from "axios";
import { useEffect, useState } from "react";
import Project2 from "@components/project2";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import SPage from "@pages/style";

export default function PageProject2() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page/project2"}`)
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
        <Project2
          color={page.color1}
          backgroundColor={page.color2}
          otherColor={page.color3}
          flashColor={page.color4}
          title={page.title}
        />
      </div>
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
