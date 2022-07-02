import styled from "styled-components";

export default styled.section`
  width: 70vw;
  height: 75vh;
  background: ${(props) => {
    return `${props.color}`;
  }};
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    width: 100vw;
    min-height: 75vh;
  }
`;
