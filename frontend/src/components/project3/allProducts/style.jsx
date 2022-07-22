import styled from "styled-components";

export default styled.section`
  width: 70vw;
  min-height: 75vh;
  padding-bottom: 15vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  .imgCollection {
    height: 8vh;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 5vh 0 0 2.5vw;
    img {
      height: 100%;
      margin-right: 1vw;
    }
  }

  .list {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
