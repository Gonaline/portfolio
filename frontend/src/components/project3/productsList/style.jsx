import styled from "styled-components";

export default styled.section`
  width: 90%;
  min-height: 75vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;

  div {
    background-size: contain;
    width: 5vw;
    aspect-ratio: 1/1;
    object-fit: contain;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
