import axios from "axios";
import { useEffect, useState } from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import Left from "@components/left";
import About from "@components/about";

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
    <section className="body">
      <Header backgroundColor={page.color1} />
      <Left
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        textColor={page.color1}
      />
      <About
        backgroundColor={page.color2}
        title={page.title}
        colorButton={page.colorButton}
      />
      <Footer backgroundColor={page.color1} />
    </section>
  );
}
