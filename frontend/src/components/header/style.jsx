import styled from "styled-components";

export default styled.header`
  height: 15vh;
  width: 100vw;
  position: fixed;
  background: ${(props) => {
    return `${props.backgroundColor}`;
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
    align-items: flex-end;
    justify-content: center;
    margin-right: 3vw;
  }
  h3 {
    text-align: center;
    margin: 0 1vw 1.5vw 1vw;
    color: var(--white);
  }
  nav .link:hover {
    border-bottom: var(--darkColor) 0.5vh solid;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
