import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import Header from "@components/header";
import Footer from "@components/footer";
import Left from "@components/left";
import About from "@components/about";

export default function PageAbout() {
  const { test, page } = useContext(ctxProvider);
  console.warn(test, page);
  return (
    <section className="body">
      <Header />
      <Left />
      <About />
      <Footer />
    </section>
  );
}
