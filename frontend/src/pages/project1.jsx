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
      <Header backgroundColor={page.color1} />
      <Left
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        textColor={page.color1}
      />
      <CtxProvider>
        <Project1
          color={page.color1}
          backgroundColor={page.color2}
          otherColor={page.color3}
          flashColor={page.color4}
          title={page.title}
        />
      </CtxProvider>
      <Footer backgroundColor={page.color1} />
    </section>
  );
}
