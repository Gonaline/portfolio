import styled from "styled-components";

export default styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffdee0;
  padding-bottom: 15vh;
  h3 {
    padding: 5vh 0 2.5vh 2.5vw;
    font-size: 1.5rem;
  }
  .list {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
