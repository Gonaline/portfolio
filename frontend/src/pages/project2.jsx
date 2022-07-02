import axios from "axios";
import { useEffect, useState } from "react";
import Project2 from "@components/project2";
import Header from "@components/header";
import Footer from "@components/footer";
import Left from "@components/left";

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
    <section className="body">
      <Header color={page.colorHeader} />
      <Left
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        textColor={page.colorLeftText}
      />
      <Project2
        color={page.colorRight}
        title={page.title}
        colorButton={page.colorButton}
      />
      <Footer color={page.colorHeader} />
    </section>
  );
}
