import styled from "styled-components";

export default styled.section`
  height: 46vh;
  width: 55vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .result {
    height: 36vh;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .choice {
    margin: 0 1vw 0 1vw;
    border-radius: 1vw;
    background-color: ${(props) => {
      return `${props.colorButton}`;
    }};
  }
  .onePoint {
    height: 4vh;
    aspect-ratio: 1.5/1;
    margin: auto;
    border-radius: 5px;
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
`;
