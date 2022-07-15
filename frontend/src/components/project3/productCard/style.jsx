import styled from "styled-components";

export default styled.section`
  background: ${(props) => {
    return `url(${props.img}) no-repeat`;
  }};
  border-radius: 10%;
  width: 20%;
  margin: 2%;
  aspect-ratio: 1/1;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: none;
  }
  :hover {
    border-radius: 50%;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      background-color: #ff697399;
      border-radius: 50%;
      .text {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
          display: flex;
          color: var(--white);
          text-align: center;
          font-size: 2rem;
        }
      }
    }

    .add {
      position: absolute;
      width: 30px;
      aspect-ratio: 1/1;
      background-color: red;
      border-radius: 0.5vw;
      color: var(--white);
      p {
        display: block;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 700px) {
  }
`;
