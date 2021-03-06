import styled from "styled-components";

export default styled.section`
  height: 46vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .result {
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .choice {
    margin: 0 1vw 0 1vw;
    border-radius: var(--border-radius);
    background-color: ${(props) => {
      return `${props.otherColor}`;
    }};
  }
  .onePoint {
    height: 4vh;
    aspect-ratio: 1.5/1;
    margin: auto;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => {
      return `${props.colorHover}`;
    }};
    color: var(--white);
    font-size: 1.5rem;
    text-align: center;
    animation-duration: 2s;
    animation-iteration-count: 1;
    font-weight: bold;
  }
  .delete {
    opacity: 0.2;
    animation-name: deleteLoser;
    animation-duration: 3s;
    animation-iteration-count: none;
  }
  @keyframes deleteLoser {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }

  .computerWin {
    animation-name: computerSlide;
  }
  @keyframes computerSlide {
    from {
      transform: translate(-50px, 0px);
    }
    to {
      transform: translate(0px, 0);
    }
  }
  .userWin {
    animation-name: userSlide;
  }
  @keyframes userSlide {
    from {
      transform: translate(50px, 0px);
    }
    to {
      transform: translate(0px, 0);
    }
  }
  .none {
    background: none;
  }
  .user,
  .computer {
    height: 35vh;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 35vh;
      aspect-ratio: 1/1;
    }
  }
  .computer {
    img {
      transform: scaleX(-1);
    }
  }
  .message {
    height: 10vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-name: h3Slide;
  }

  @keyframes h3Slide {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  h3 {
    font-weight: bold;
  }
  @media screen and (max-width: 700px) {
    height: 30vh;
    width: 100vw;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    .result {
      height: 18vh;
      width: 100%;
      justify-content: center;
    }
    .onePoint {
      height: 3vh;
      aspect-ratio: 1.5/1;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      text-align: center;
      font-weight: bold;
    }
    .user,
    .computer {
      height: 35vw;
      width: 35vw;
      aspect-ratio: 1/1;
      img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: contain;
      }
    }
    .message {
      height: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h3 {
      font-size: 2em;
    }
  }
`;
