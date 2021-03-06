import styled from "styled-components";

export default styled.nav`
  height: 15vh;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      background: ${(props) => {
        return `${props.color}`;
      }};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--border-radius);
      height: 5vh;
      aspect-ratio: 1/1;
      margin: 0 0.8vw;
      color: var(--white);
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      box-shadow: var(--box-shadow);
    }
    .linkActive {
      background-color: var(--activeLink);
    }
    a:hover {
      background: ${(props) => {
        return `${props.colorHover}`;
      }};
      -ms-transform: scale(1.3); /* IE 9 */
      -webkit-transform: scale(1.3); /* Safari 3-8 */
      transform: scale(1.3);
      transition: transform 0.5s ease;
    }
    .linkActive:hover {
      background-color: var(--activeLink);
      transform: none;
    }
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
