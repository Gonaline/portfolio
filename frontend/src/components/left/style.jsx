import styled from "styled-components";

export default styled.section`
  background-color: var(--darkColor);
  width: 30vw;
  height: 75vh;
  position: fixed;
  top: 15vh;
  display: flex;
  align-items: center;
  p,
  h2 {
    margin: 0 10% 0 10%;
  }
  .subTitle {
    margin-bottom: 2vh;
    opacity: 0.5;
  }
  p {
    color: var(--white);
  }
  h2 {
    color: ${(props) => {
      return `${props.textColor}`;
    }};
    margin-bottom: 6vh;
  }
  @media screen and (max-width: 700px) {
    position: static;

    width: 100%;
    height: auto;
    margin-top: 14vh;
    align-items: flex-start;

    p {
      margin-bottom: 3vh;
    }
    h2 {
      margin-bottom: 4vh;
    }
    h2,
    p {
      margin-left: 6vw;
    }
  }
`;
