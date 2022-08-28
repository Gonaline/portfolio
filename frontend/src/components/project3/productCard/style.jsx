import styled from "styled-components";

export default styled.article`
  background: ${(props) => {
    return `url(${props.img}) no-repeat`;
  }};
  border-radius: 10%;
  width: 19%;
  aspect-ratio: 1/1;
  margin: 3%;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;

  .container {
    display: none;
  }
  .mobileText {
    display: none;
  }
  :hover {
    border-radius: 50%;
    .container {
      background: ${(props) => {
        return `${props.color4}`;
      }};
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      aspect-ratio: 1/1;
    }
    a {
      text-decoration: none;
    }
    .text {
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        padding-top: 20%;
        color: var(--white);
        text-align: center;
        font-size: 1.5rem;
      }
    }
    .add {
      position: relative;
      top: 2vh;
      width: 30px;
      aspect-ratio: 1/1;
      background: ${(props) => {
        return `${props.color1}`;
      }};
      border-radius: 0.5vw;
      color: var(--white);
      text-align: center;
      :hover {
        background: ${(props) => {
          return `${props.darkColor}`;
        }};
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 45%;
    margin: 3vh 0 6vh 0;
    border-radius: 15px 15px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .add,
    .text {
      display: none;
    }

    .mobileText {
      background: ${(props) => {
        return `${props.whiteOpacity}`;
      }};
      border-radius: 0 0 15px 15px;
      width: 100%;
      height: 6vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 13.5vh;
      h3 {
        padding-top: 0;
        color: var(--darkColor);
        text-align: center;
        font-size: 1.2rem;
      }
    }
  }
`;
