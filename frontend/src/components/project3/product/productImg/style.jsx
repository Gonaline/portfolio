import styled from "styled-components";

export default styled.section`
  display: flex;
  .bigImg {
    width: 23vw;
    aspect-ratio: 1/1;
    background: ${(props) => {
      return `url(${props.bigImg}) no-repeat`;
    }};
    background-size: cover;
    display: flex;
    justify-content: left;
    align-items: flex-end;
    border-radius: 5%;
  }
  .true {
    transform: scaleX(-1);
  }
  .buttons {
    display: flex;
    flex-direction: column;
    margin-right: 0.3rem;
    justify-content: flex-end;
    width: 4vw;
    margin: 0 5px 0 0;

    button {
      border: none;
      width: 4vw;
      aspect-ratio: 1/1;
      border-radius: 10%;
      margin: 5px 0 0 0;
    }
    .photo {
      background: ${(props) => {
        return `url(${props.photo}) no-repeat`;
      }};
      background-size: cover;
    }
    .technicalSheet {
      background: ${(props) => {
        return `url(${props.technicalSheet}) no-repeat`;
      }};
      background-size: cover;
    }
    .technicalSheet2 {
      background: ${(props) => {
        return `url(${props.technicalSheet2}) no-repeat`;
      }};
      background-size: cover;
    }
    .none {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 2vh;
    .bigImg {
      order: 1;
      width: 90vw;
      border-radius: 15px;
    }
    .buttons {
      order: 2;
      display: flex;
      flex-direction: row;
      margin-right: 0;
      justify-content: flex-end;
      width: auto;
      margin: 0;
      display: none;

      button {
        width: 15vw;
        margin: 1vh 0 3vh 2vw;
      }
      .photo {
        background: ${(props) => {
          return `url(${props.photo}) no-repeat`;
        }};
        background-size: cover;
      }
      .technicalSheet {
        background: ${(props) => {
          return `url(${props.technicalSheet}) no-repeat`;
        }};
        background-size: cover;
      }
      .technicalSheet2 {
        background: ${(props) => {
          return `url(${props.technicalSheet2}) no-repeat`;
        }};
        background-size: cover;
      }
      .none {
        display: none;
      }
    }
  }
`;
