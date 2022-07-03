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
    flex-direction: center;
    align-items: flex-end;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 75vh;
  }
`;
