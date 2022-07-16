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
    .firstImg {
      height: 10vh;
      aspect-ratio: 1/1;
      background: ${(props) => {
        return `url(${props.firstImg}) no-repeat`;
      }};
      background-size: cover;
      margin: 3%;
    }
  }

  .right {
    margin-right: 3vw;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h6 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 700px) {
  }
`;
