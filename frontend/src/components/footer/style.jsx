import styled from "styled-components";

export default styled.footer`
  height: 10vh;
  width: 100vw;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  display: flex;
  .color {
    height: 10vh;
    width: 30vw;
    background-color: var(--darkColor);
  }
  .icons {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-left: 1vw;
    height: 6vh;
    aspect-ratio: 1/1;
    align-items: center;
  }
  img {
    height: 6vh;
    aspect-ratio: 1/1;
    background-size: contain;
  }
  @media screen and (max-width: 700px) {
    .color {
      display: none;
    }
  }
`;
