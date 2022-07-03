import styled from "styled-components";

export default styled.button`
  width: 10vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3/1;
  border-radius: 1vh;
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: var(--white);
  text-shadow: 1px 1px 1px var(--brown-opacity);
  border-radius: 10px;
  background-color: orange;
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    #f3665314 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  position: relative;
  right: -600px;
  bottom: 400px;
`;
