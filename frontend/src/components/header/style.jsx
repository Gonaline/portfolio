import styled from "styled-components";

export default styled.nav`
  position: fixed;
  * {
    text-decoration: none;
  }
  section {
    width: 100vw;
    height: 15vh;
    background: ${(props) => {
      return `${props.backgroundColor}`;
    }};
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    display: flex;
    margin-right: 3vw;
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

  .categories {
    height: 15vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    .title {
      height: 15vh;
      width: 15vw;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        font-size: 2.2rem;
        font-weight: 400;
        color: var(--white);
      }
    }
    .submenu {
      display: none;
    }
  }
  .categories:hover {
    background: var(--darkColor);
    .submenu {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 15vw;
      background: var(--darkColor);
      color: var(--white);
      position: absolute;
      top: 15vh;
      padding-bottom: 2vh;
      .link {
        width: 90%;
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        h4 {
          font-size: 1.5rem;
          color: var(--white);
          color: ${(props) => {
            return `${props.backgroundColor}`;
          }};
        }
      }
      .link:hover {
        background: #ffffff50;
      }
    }
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
