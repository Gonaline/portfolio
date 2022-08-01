import styled from "styled-components";

export default styled.section`
  width: 70vw;
  min-height: 75vh;
  padding-bottom: 15vh;
  display: flex;
  flex-direction: column;

  .list {
    background-color: #00ff2a;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    margin-top: 4vh;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    padding-bottom: 12vh;
    .list {
      width: 100%;
      justify-content: space-around;
    }
    .empty {
      width: 47%;
    }
  }
`;
