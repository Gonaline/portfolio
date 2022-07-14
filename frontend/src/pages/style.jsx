import styled from "styled-components";

export default styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    align-items: center;

    .main {
      flex-direction: column;
    }
  }
`;
