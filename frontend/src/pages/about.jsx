import dataPages from "@assets/data/pages";
import About from "@components/about";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import SPage from "@pages/style";

export default function PageAbout() {
  const page = dataPages[0];

  return (
    <SPage>
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
      <Header backgroundColor={page.color1} />
    </SPage>
  );
}
