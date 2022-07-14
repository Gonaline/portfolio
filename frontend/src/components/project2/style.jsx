import styled from "styled-components";

export default styled.section`
  width: 70vw;
  /* height: 100%; */
  /* margin: auto; */
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */
  .container {
    display: flex;
    width: 100%;
    height: 100%; // valeur pour 3 lignes de photos
    /* align-items: center; // sans cela, ne se dispose pas sur toute la hauteur*/
    background-color: #17b892;
  }
  .box {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0.3vw 0.3vw;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    line-height: 0;
  }
  .box:hover {
    flex: 1 1 40%; //40%en largeur
  }
  .box > img {
    width: 200%;
    height: 200%;
    object-fit: cover;
    transition: 0.5s;
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%); /* Firefox */
  }
  .box:hover > img {
    -webkit-filter: none;
    filter: none; /* Firefox */
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  height: 50vh; // à valider
    /* display: flex;
  flex-wrap: nowrap; */
  /* justify-content: center; */
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; // valeur pour 3 lignes de photos
  }
  .box {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0.3vw 0.3vw;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    line-height: 0;
  }
  .box:hover {
    flex: 1 1 40%; //40%en largeur
  }
  .box > img {
    width: 200%;
    height: 200%;
    object-fit: cover;
    transition: 0.5s;
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%); /* Firefox */
  }
  .box:hover > img {
    -webkit-filter: none;
    filter: none; /* Firefox */
    width: 100%;
    height: 100%;
  }
`;
