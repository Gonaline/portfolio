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
    justify-content: center;
    margin: auto;
    h2 {
      text-align: center;
      padding: 0 2vw;
    }
  }
`;
