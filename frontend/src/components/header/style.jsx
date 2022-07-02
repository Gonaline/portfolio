import styled from "styled-components";

export default styled.header`
  height: 15vh;
  width: 100vw;
  background: ${(props) => {
    return `${props.color}`;
  }};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .link {
    text-decoration: none;
  }
  .me {
    height: 15vh;
    width: 30vw;
    background-color: var(--darkColor);
    display: flex;
    justify-content: left;
    align-items: flex-end;
    h1 {
      margin: 0 15%;
      width: 100%;
      text-align: left;
      padding-bottom: 1.5vh;
      color: var(--white);
    }
  }
  .nav1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3vw;
  }
  .nav1li {
    color: var(--white);
    font-size: 2rem;
    padding: 0 2vw;
    padding-bottom: 1.5vh;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .me {
      height: 15vh;
      width: 100%;
      justify-content: center;
      align-items: center;
      h1 {
        margin: 0;
        width: 100%;
        text-align: center;
        padding-bottom: 0;
      }
    }
    nav {
      display: none;
    }
  }
`;
