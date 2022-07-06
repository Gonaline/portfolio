import styled from "styled-components";

export default styled.nav`
  width: 100%;
  font-size: 1.2rem;
  background-color: var(--darkColor);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding-left: 5vw;
  ul {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    right: 0rem;
    text-align: center;
    position: absolute;
    background-color: var(--darkColor);
  }

  li {
    color: var(--white);
    /* margin-top: 0.5vh;
    padding-top: 3vh; */

    height: 15vw;
    width: 100vw;
    background-color: #ffffff17;
  }
  .first {
    /* margin-top: 10vh; */
  }
  a {
    text-decoration: none;
    font-size: 1.5em;
  }
  .hamburger {
    z-index: 1;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .burger {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: var(--white);
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  /* details[open] summary ~ * {
    animation: 0.5s ease-out;
  } */
  .burger1 {
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
  .burger2 {
    transform: ${(props) =>
      props.isOpen ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
  }

  .burger3 {
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
  .link {
    color: var(--blue);
    text-decoration: none;
  }
  .aColor {
    color: var(--white);
  }
  img {
    width: 20vw;
    aspect-ratio: 1/1;
    object-fit: contain;
    background-color: #7ecea9;
    border-radius: 5vh;
    margin: 2vh 0;
  }
  @media screen and (min-width: 700px) {
    .hamburger {
      display: none;
    }
  }
`;
