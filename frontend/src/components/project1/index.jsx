import { useContext } from "react";
import context from "@services/context/project1Ctx";
import PropTypes from "prop-types";
import Title from "@components/title";
import Nav from "@components/projectNav";
import Game from "./game";
import Result from "./result";
import SProject1 from "./style";

export default function Project1({
  colorRight,
  title,
  colorButton,
  colorHover,
}) {
  const { userChoice } = useContext(context);

  return (
    <SProject1 backgroundColor={colorRight}>
      <Title title={title} />
      <Nav color={colorButton} colorHover={colorHover} />

      {userChoice === "" ? (
        <Game colorButton={colorButton} colorHover={colorHover} />
      ) : (
        <section className="right">
          <div className="bottom">
            <Result color={colorButton} colorHover={colorHover} />
          </div>
        </section>
      )}
    </SProject1>
  );
}

Project1.propTypes = {
  colorRight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  colorHover: PropTypes.string.isRequired,
};
