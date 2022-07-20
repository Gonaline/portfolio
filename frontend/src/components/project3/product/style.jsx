import styled from "styled-components";

export default styled.section`
  width: 70vw;
  min-height: 75vh;
  background: ${(props) => {
    return `${props.backgroundColor}`;
  }};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* background-color: #d9a4f2; */
  }

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    /* border-bottom: 0.1px black solid; */
    margin-bottom: 1.5vh;
  }
  .introduction {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 1.5vh;
    /* border-bottom: 0.1px black solid; */
  }
  .size,
  .textColors {
    font-size: 0.8rem;
    font-style: italic;
    margin-bottom: 1.5vh;
  }
  .price {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5vh;
  }

  @media screen and (max-width: 700px) {
  }
`;
