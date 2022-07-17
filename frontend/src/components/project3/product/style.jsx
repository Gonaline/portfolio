import styled from "styled-components";

export default styled.section`
  width: 70vw;
  height: 75vh;
  padding-top: 10vh;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  display: flex;
  justify-content: left;
  align-items: stretch;
  .img {
    height: 55vh;
    aspect-ratio: 1/1;
    background: ${(props) => {
      return `url(${props.img}) no-repeat`;
    }};
    background-size: cover;
    margin: 0 3vw;
    .technicalSheet {
      height: 10vh;
      aspect-ratio: 1/1;
      background: ${(props) => {
        return `url(${props.technicalSheet}) no-repeat`;
      }};
      background-size: cover;
      margin: 3%;
    }
    .technicalSheet2 {
      height: 10vh;
      aspect-ratio: 1/1;
      background: ${(props) => {
        return `url(${props.technicalSheet2}) no-repeat`;
      }};
      background-size: cover;
      margin: 3%;
    }
    .bigImg {
      height: 10vh;
      aspect-ratio: 1/1;
      background: ${(props) => {
        return `url(${props.img}) no-repeat`;
      }};
      background-size: cover;
      margin: 3%;
    }
  }

  .right {
    margin-right: 3vw;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
    line-height: 1.3rem;
    margin-bottom: 1rem;
  }
  h5,
  h6 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
  .colorsChoice1 {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    width: 100%;
    /* justify-content: flex-start;
    align-items: left; */

    h5 {
      padding: 10px 0 0px 10px;
      background-color: pink;
    }
    .choices {
      margin-top: -10px;
      background-color: #cb2c46;
      display: flex;
      justify-content: left;
      align-items: center;

      button {
        width: 45px;
        aspect-ratio: 1/1;
        border: none;
        background: none;
        .textColor {
          display: none;
        }
      }
      /* button:hover {
        .textColor {
          display: flex;
          position: relative;
          top: 15px;
          left: 50px;
          background-color: var(--white);
          border: 0.2px grey solid;
        } */
      }
      h1{
        font-size:1rem;
        padding-bottom:5px;
      }

      .imgColor {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 700px) {
  }
`;
