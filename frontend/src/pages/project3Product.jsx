import dataPages from "@assets/data/pages";
import Product from "@components/project3/product";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import Nav from "@components/project3/nav";
import SPage from "@pages/styleProject3";

export default function PageProject3Product() {
  const page = dataPages[3];

  return (
    <SPage backgroundColor={page.color2}>
      <Burger color={page.color1} />
      <div className="main">
        <Left
          title={page.title}
          subtitle={page.subtitle}
          description={page.description}
          textColor={page.color1}
        />
        <div className="flexRight">
          <Nav openColor={page.color2} whiteOpacity={page.color3} />
          <Product
            color1={page.color1}
            color2={page.color2}
            whiteOpacity={page.color3}
            color4={page.color4}
            darkColor={page.color5}
          />
        </div>
      </div>
      <Header backgroundColor={page.color1} />
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
