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
  .submenu {
    display: none;
  }
  .categories {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
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

  .categories:hover {
    background: var(--white);
    h3 {
      color: ${(props) => {
        return `${props.navColor}`;
      }};
    }
    .submenu {
      display: flex;
      width: 70vw;
      height: 30vh;
      background: var(--white);
      position: absolute;
      top: 10vh;
      .ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        .category {
          height: 5vh;
          width: 15vw;
          object-fit: contain;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          img {
            height: 100%;
            aspect-ratio: 1/1;
            margin-right: 0.5vw;
          }
          h4 {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 77vh;
    padding-bottom: 9vh;
  }
`;
