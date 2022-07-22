import styled from "styled-components";

export default styled.body`
  .main {
    width:100vw;
    position: absolute;
    top: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flexRight {
    position: relative;
    left: 30vw;
    height: auto;
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
