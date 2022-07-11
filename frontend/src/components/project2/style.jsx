import styled from "styled-components";

export default styled.section`
  width: 70vw;
  height: 75vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .container {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .box {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0.3vw 0.3vw;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    line-height: 0;
  }
  img {
    -webkit-filter: grayscale(
      100%
    ); /* Pour les navigateurs Chrome, Safari, Opera */
    filter: grayscale(100%); /* Firefox */
  }
  .box > img {
    width: 130%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  .box > span {
    font-size: 3.8vh;
    display: block;
    text-align: center;
    height: 3vh;
    line-height: 2.6;
  }

  .box:hover {
    flex: 1 1 50%;
  }
  .box:hover > img {
    -webkit-filter: none;
    filter: none; /* Firefox */
    width: 100%;
    height: 80%;
  }
  /* .box:hover > img {
    width: 100%;
    height: 100%;
  } */

  @media screen and (max-width: 700px) {
    width: 100vw;
    section {
      width: 100vw;
    }
    .container {
      width: 100vw;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 30%;
    }
    /* img {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    } */
    .box > img {
      width: 100%;
      height: 10vh;
      object-fit: cover;
    }
    .box:hover {
      flex: 1 1 100%;
    }
  }
`;
