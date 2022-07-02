import axios from "axios";
import { useEffect, useState } from "react";
import { CtxProvider } from "@services/context/project1Ctx";
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
      <Header backgroundColor={page.colorHeader} />
      <Left
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        textColor={page.colorLeftText}
      />
      <CtxProvider>
        <Project1
          colorRight={page.colorRight}
          title={page.title}
          colorButton={page.colorButton}
          colorHover={page.colorHover}
        />
      </CtxProvider>
      <Footer backgroundColor={page.colorHeader} />
    </section>
  );
}
