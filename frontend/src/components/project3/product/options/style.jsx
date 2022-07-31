import styled from "styled-components";

export default styled.section`
  background: ${(props) => {
    return `${props.whiteOpacity}`;
  }};
  border-radius: 10px;
  padding: 5px 5px 5px 10px;
  margin-bottom: 1vh;
  .titleOfOption {
    width: 100%;
    h5 {
      padding: 5px 0 5px 0;
    }
  }
  .choice {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    button {
      width: 40px;
      height: 40px;
      margin-right: 0.5vw;
      margin-bottom: 0.5vh;
      border: none;
      background: none;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .textOption {
        display: none;
      }
    }
    .imgOption {
      width: 36px;
      aspect-ratio: 1/1;
    }

    button:focus,
    button:hover,
    button:active {
      background: var(--darkColor);
      border: solid 2px var(--darkColor);
      -webkit-box-shadow: 0px 10px 13px -7px #000000,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    }

    .selected {
      background: var(--darkColor);
      border: solid 2px var(--darkColor);
      -webkit-box-shadow: 0px 10px 13px -7px #000000,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    }
  }

  @media screen and (max-width: 700px) {
    padding: 1vh 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .choice {
      width: 80vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;

      button {
        width: 11vw;
        height: 11vw;
        border-radius: 5.5vw;
        margin: 1.1vw;
      }
      .imgOption {
        width: 11vw;
      }
    }
  }
`;
