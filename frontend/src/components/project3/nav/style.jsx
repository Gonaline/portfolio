import styled from "styled-components";

export default styled.nav`
  width: 70vw;
  background: ${(props) => {
    return `${props.clearColor}`;
  }};
  -webkit-box-shadow: 0px 10px 13px -7px #00000077,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #00000077, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    .title {
      height: 8vh;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        font-size: 1.8rem;
        font-weight: bold;
        margin: 0 2.5vw;
      }
    }
    .submenu {
      display: none;
    }
  }

  .menu:hover {
    background: ${(props) => {
      return `${props.openColor}`;
    }};
    a {
      text-decoration: none;
      color: var(--darkColor);
    }
  }

  .collections:hover {
    .submenu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 25vh;
      background: ${(props) => {
        return `${props.openColor}`;
      }};
      -webkit-box-shadow: 0px 10px 13px -7px #00000077,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px #00000077,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
      position: absolute;
      top: 8vh;
      padding-left: 2vw;
      .category {
        height: 6vh;
        padding: 0 3px;
        width: 12vw;
        margin: 0px 5px;
        object-fit: contain;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        img {
          height: 5vh;
          aspect-ratio: 1/1;
          margin-right: 5px;
        }
        h4 {
          font-size: 0.9rem;
        }
      }
      .category:hover {
        background: ${(props) => {
          return `${props.clearColor}`;
        }};
        border-radius: 10px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    flex-wrap: wrap;
    align-items: flex-start;

    .menu {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      .submenu {
        display: none;
      }
    }

    .collections:hover {
      .submenu {
        width: 100vw;
        height: auto;
        position: static;
        top: 0;
        padding-left: 0;
        .category {
          height: 6vh;
          padding: 0 0;
          width: 96vw;
          margin: 0 0;
          object-fit: contain;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-left: 2vw;
          img {
            height: 5vh;
            aspect-ratio: 1/1;
            margin-right: 2vw;
            margin-left: 2vw;
          }
          h4 {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
