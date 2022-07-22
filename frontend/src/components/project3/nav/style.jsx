import styled from "styled-components";

export default styled.nav`
  section {
    width: 70vw;
    height: 8vh;
    background-color: #ffffff40;
    -webkit-box-shadow: 0px 10px 13px -7px #00000077,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #00000077, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .categories {
    height: 8vh;
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

  .categories:hover {
    background: ${(props) => {
      return `${props.openColor}`;
    }};
    a {
      text-decoration: none;
    }
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
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
