import styled from "styled-components";

export default styled.section`
  background-color: #ffffff64;
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
    button {
      width: 45px;
      aspect-ratio: 1/1;
      border: none;
      background: none;

      .textOption {
        display: none;
      }
    }
    button: hover {
      border: black solid 1px;
      border-radius: 25px;
    }
    .imgOption {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
  }
`;
