import styled from "styled-components";

export default styled.nav`
  min-width: 100%;
  max-width: 100%;
  height: 10vh;
  background: ${(props) => {
    return `${props.navColor}`;
  }};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  .categories {
    .submenu {
      display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    .title {
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 3vw;
      h3 {
        font-size: 1.8rem;
        font-weight: bold;
      }
    }
  }

  .categories:hover {
    background: var(--white);
    h3 {
      color: ${(props) => {
        return `${props.navColor}`;
      }};
    }
    a {
      text-decoration: none;
    }
    .submenu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      width: 70vw;
      height: 25vh;
      background: var(--white);
      position: absolute;
      top: 10vh;
      padding-left: 3vw;
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
        background-color: #ff697350;
        border-radius: 10px;
        box-shadow: 6px 6px 2px 1px #ff6973;
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
