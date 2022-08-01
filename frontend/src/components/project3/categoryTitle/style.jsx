import styled from "styled-components";

export default styled.div`
  margin-top: 5vh;
  width: 100%;
  background: ${(props) => {
    return `${props.whiteOpacity}`;
  }};
  padding: 2vh 0 1vh 0;
  border-bottom: white solid 0.5px;
  text-align: center;
  line-height: 1.8rem;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 2.5vw;
    color: var(--darkColor);
  }
  h5 {
    font-style: italic;
  }
  img {
    height: 8vh;
    aspect-ratio: 1/1;
  }

  @media screen and (max-width: 700px) {
  }
`;
