import styled from "styled-components";

export default styled.section`
  width: 70vw;
  height: 75vh;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  display: flex;
  flex-wrap: wrap;
  .bottom {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 75vh;
    margin: auto;
    align-items: flex-start;
    .bottom {
      justify-content: flex-start;
      flex-direction: column;
      align-items: right;
      margin-bottom: 15vh;
    }
  }
`;
