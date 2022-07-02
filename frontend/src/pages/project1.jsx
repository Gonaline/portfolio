import axios from "axios";
import { useEffect, useState } from "react";
import Project1 from "@components/project1";
import Header from "@components/header";
import Footer from "@components/footer";
import Left from "@components/left";

export default function PageProject1() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page/project1"}`)
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
      <Project1
        color={page.colorRight}
        title={page.title}
        colorButton={page.colorButton}
        colorHover={page.colorHover}
      />
      <Footer color={page.colorHeader} />
    </section>
  );
}
