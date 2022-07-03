import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 15vh;
  width: 70%;
  h2 {
    font-weight: bold;
    padding-left: 2vw;
  }
  @media screen and (max-width: 700px) {
    justify-content: flex-start
    margin: auto;
    width: 100%;

    h2 {
      text-align: center;
      padding: 0 20vw;
      font-size: 2.5em;
    }
  }
`;
