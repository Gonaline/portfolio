import { CtxProvider } from "@services/context/project1Ctx";
import dataPages from "@assets/data/pages";
import Project1 from "@components/project1";
import Header from "@components/header";
import Burger from "@components/burger";
import Footer from "@components/footer";
import Left from "@components/left";
import SPage from "@pages/style";

export default function PageProject1() {
  const page = dataPages[1];

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
        <CtxProvider>
          <div className="fixedRight">
            <Project1
              color={page.color1}
              backgroundColor={page.color2}
              otherColor={page.color3}
              flashColor={page.color4}
              title={page.title}
            />
          </div>
        </CtxProvider>
      </div>
      <Footer backgroundColor={page.color1} />
      <Header backgroundColor={page.color1} />
    </SPage>
  );
}
