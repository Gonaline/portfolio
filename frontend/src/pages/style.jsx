import styled from "styled-components";

export default styled.body`
  .fixedRight {
    position: fixed;
    right: 0;
    top: 15vh;
    height: auto;
  }
  .flexRight {
    position: absolute;
    width:100%;
    left: 30vw;
    top: 15vh;
    height: auto;
  }
  .main {
    display: flex;
  }
  @media screen and (max-width: 700px) {
    .fixedRight {
    position: static;
  }
  .flexRight {
    position: static;
  }
    width: 100vw;
    height: 100vh;
    display: flex
    justify-content: space-between;
    align-items: center;

    .main {
      flex-direction: column;
    }
  }
`;
