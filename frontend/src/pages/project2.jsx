import dataPages from "@assets/data/pages";
import Project2 from "@components/project2";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import SPage from "@pages/style";

export default function PageProject2() {
  const page = dataPages[2];

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
          <Project2
            color={page.color1}
            backgroundColor={page.color2}
            otherColor={page.color3}
            flashColor={page.color4}
            title={page.title}
          />
        </div>
      </div>
      <Header backgroundColor={page.color1} />
      <Footer backgroundColor={page.color1} />
    </SPage>
  );
}
