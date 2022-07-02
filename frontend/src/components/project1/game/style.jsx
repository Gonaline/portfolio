import styled from "styled-components";

export default styled.section`
  height: 46vh;
  width: 60vw;
  margin: 3vh 0 10vh 10vw;
  display: flex;

  .userChoice {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    aspect-ratio: 1/1;
    margin: 0 4vw 0 4vw;
    border: none;
    border-radius: 1vw;
    background-color: ${(props) => {
      return `${props.buttonColor}`;
    }};
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow);
    img {
      width: 5.5vw;
      aspect-ratio: 1/1;
    }
  }
  button:hover {
    background-color: ${(props) => {
      return `${props.color}`;
    }};
    -ms-transform: scale(1.3); /* IE 9 */
    -webkit-transform: scale(1.3); /* Safari 3-8 */
    transform: rotate(20deg) scale(1.3);
  }
  button:active {
    background-color: var(--orange);
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  h3 {
    font-weight: bold;
  }
`;
