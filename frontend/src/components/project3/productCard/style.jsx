import styled from "styled-components";

export default styled.section`
  background: ${(props) => {
    return `url(${props.img}) no-repeat`;
  }};
  border-radius: 10%;
  width: 19%;
  aspect-ratio: 1/1;
  margin: 2%;
  background-size: contain;
  display: flex;
  flex-wrap: column;
  justify-content: center;
  align-items: center;

  .container {
    display: none;
  }

  :hover {
    border-radius: 50%;

    .container {
      background-color: #ff697399;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
      background-color: red;
      border-radius: 0.5vw;
      color: var(--white);
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
  }
`;
