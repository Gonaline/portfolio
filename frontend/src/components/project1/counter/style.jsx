import styled from "styled-components";

export default styled.div`
  height: 10vh;
  width: 55vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .you,
  .computer {
    min-width: 20vw;
    max-width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .you {
    justify-content: right;
    padding-right: 1vw;
  }
  .computer {
    justify-content: left;
    padding-left: 1vw;
  }
  .points {
    width: 5vw;
    height: 4vh;
    border-radius: 5px;
    background-color: ${(props) => {
      return `${props.colorButton}`;
    }};
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  h4 {
    margin: 0px 10px 0 10px;
    font-size: 2em;
  }
`;
