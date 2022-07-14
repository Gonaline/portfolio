import styled from "styled-components";

export default styled.div`
  z-index: 1;
  width: 100vw;
  height: 14vh;
  background-color: var(--darkColor);
  position: fixed;
  display: flex;
  justify-content: left;
  align-items: center;

  .logo {
    width: 20vw;
    height: 100%;
    aspect-ratio: 1/1;
    padding-left: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
      background: ${(props) => {
        return `${props.color}`;
      }};
      border-radius: 5vh;
      margin: 2vh 0;
    }
  }

  ul {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    right: 0rem;
    top: 14vh;
    text-align: center;
    position: absolute;
    background-color: var(--darkColor);
  }
  li {
    color: var(--white);
    margin-top: 0.7vh;
    padding-right: 5vw;
    display: flex;
    justify-content: right;
    align-items: center;
    height: 15vw;
    width: 100vw;
    background-color: #ffffff13;
  }
  a {
    text-decoration: none;
    font-size: 1.5em;
  }
  .hamburger {
    background-color: var(--darkColor);
    border: none;
    width: 12vw;
    aspect-ratio: 1/0.8;
    z-index: 1;
    position: absolute;
    right: 3.5vw;
    top: 2.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    .burger {
      width: 100%;
      height: 0.25rem;
    }
  }
  .false {
    top: 2.5vh;

    justify-content: space-around;
    align-items: center;
    .burger {
      width: 100%;
      height: 0.25rem;
    }
  }
  .true {
    top: 3vh;

    justify-content: center;
    align-items: center;
    .burger {
      width: 200%;
      height: 0.25rem;
    }
  }
  .burger {
    border-radius: 10px;
    background-color: var(--white);
    transition: all 0.3s linear;
  }
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

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
