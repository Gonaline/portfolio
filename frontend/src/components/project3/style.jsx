import styled from "styled-components";

export default styled.section`
  width: 70vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
