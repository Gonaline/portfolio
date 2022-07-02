import axios from "axios";
import { useEffect, useState } from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import Left from "@components/left";
import About from "@components/about";

export default function PageAbout() {
  const [pageAbout, setPageAbout] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/page/about"}`)
      .then(({ data }) => {
        setPageAbout(data);
      });
  }, []);

  return (
    <section className="body">
      <Header />
      <Left
        title={pageAbout.title}
        subtitle={pageAbout.subtitle}
        description={pageAbout.description}
        textColor={pageAbout.colorRight}
      />
      <About />
      <Footer />
    </section>
  );
}
