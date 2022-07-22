import styled from "styled-components";

export default styled.section`
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 8vh;
  padding-bottom: 9vh;
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .collection {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 1.5vh;
    color: ${(props) => {
      return `${props.darkColor}`;
    }};
  }
  .introduction {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 1.5vh;
  }
  .size,
  .textColors {
    font-size: 0.8rem;
    font-style: italic;
    margin-bottom: 1.5vh;
    line-height: 1rem;
  }
  .price {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5vh;
  }

  @media screen and (max-width: 700px) {
  }
`;
