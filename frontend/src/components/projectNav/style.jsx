import styled from "styled-components";

export default styled.nav`
  height: 15vh;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      background: ${(props) => {
        return `${props.color}`;
      }};
      border-radius: 5px;
      height: 5vh;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5vw;
    }
    .link {
      color: var(--white);
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
