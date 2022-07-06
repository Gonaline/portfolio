import styled from "styled-components";

export default styled.div`
  button,
  input[type="button"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  font-weight: bold;
  width: 8vw;
  aspect-ratio: 3/1;
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1.2rem;
  text-align: center;
  color: var(--white);
  border-radius: var(--border-radius);

  background-color: ${(props) => {
    return `${props.color}`;
  }};
  font-family: var(--font-family);
  margin-bottom: 1vh;

  @media screen and (max-width: 700px) {
    width: 25vw;

    button {
      width: 25vw;
      border: 0;
      line-height: 2.5;
      padding: 0 1vw;
      font-size: 1.2rem;
      margin-right: 5vw;
    }
  }
`;
