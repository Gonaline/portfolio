import styled from "styled-components";

export default styled.div`
  width: 100vw;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  padding: 2vh 0 1vh 0;
  border-bottom: white solid 0.5px;
  text-align: left;
  line-height: 1.8rem;
  .otherProducts {
    margin-left: 2.5vw;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0;
    color: var(--darkColor);
  }
  h5 {
    font-style: italic;
  }
  img {
    display: none;
  }
  .none {
    display: none;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    padding: 2vh 0 1vh 0;
    border-bottom: white solid 0.5px;
    text-align: center;
    line-height: 1.8rem;
    .otherProducts {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
      display: flex;
      height: 8vh;
      aspect-ratio: 1/1;
      margin-bottom: 1vh;
    }
  }
`;
