import styled from "styled-components";

export default styled.section`
  background-color: var(--darkColor);
  width: 30vw;
  height: 75vh;
  position: fixed;
  top: 15vh;
  display: flex;
  align-items: center;
  .arrow {
    display: none;
  }
  /* .container {
    background-color: #ffff0026;
  } */
  p,
  h2 {
    margin: 0 2.5vw 0 2.5vw;
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
    flex-direction: column;
    width: 100vw;
    height: 76vh;
    margin-top: 14vh;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 3vh;

    p {
      margin-bottom: 3vh;
    }
    h2 {
      margin-bottom: 4vh;
    }
    h2,
    p,
    .arrow {
      margin-left: 6vw;
      margin-right: 6vw;
    }
    .arrow {
      border: none;
      background: none;
      width: 25vw;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 10vh;

      img {
        width: 25vw;
        object-fit: contain;
      }
    }
    .arrow:hover {
      background-color: yellow;
    }
  }
`;
