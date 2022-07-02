import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --font-family: 'Comic Neue', cursive, impact;
  --darkColor: #0e1217;
  --activeLink: #0e121754;
  --white: rgb(245, 244, 242);
  --box-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 7px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
}
.body{
  display: flex;
  flex-wrap: wrap;
}
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
}
h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  main {
    display: flex;
  }
    @media screen and (max-width: 700px) {
      h2 {
      font-size: 2rem;
    }
  }
 `;
export default GlobalStyle;
