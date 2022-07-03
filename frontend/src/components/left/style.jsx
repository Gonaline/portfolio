import styled from "styled-components";

export default styled.section`
  background-color: var(--darkColor);
  width: 30vw;
  height: 75vh;
  display: flex;
  align-items: center;
  p,
  h2 {
    margin: 0 10% 0 10%;
  }
  .subTitle {
    color: var(--white-opacity);
    margin-bottom: 2vh;
  }
  p {
    color: var(--white);
  }
  h2 {
    color: ${(props) => {
      return `${props.textColor}`;
    }};
    margin-bottom: 6vh;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
