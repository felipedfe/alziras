import styled from "styled-components";
import bgImage from '../../assets/bloco3/fundo-b3.webp';
import bgImageMobile from '../../assets/bloco3/fundo-b3-mobile.webp';

export const Container = styled.section`

`

export const BgContainer = styled.section`
  background-image: url(${bgImage});
  background-size: cover; /* Garante que a imagem cubra o contêiner */
  background-position: top; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  width: 100%;
  padding: 50px 5% 50px 5%;

  @media all and (max-width: 1024px) {
    padding: 30px 20px 30px 20px;
    /* background-image: url(${bgImageMobile}); */
  }

  @media all and (max-width: 768px) {
    padding: 30px 0px 30px 0px;
  }
`

export const TitleWrapper = styled.div`
  &>* {
    width: 50%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
  }

  @media all and (max-width: 768px) {
    display: flex;
    justify-content: center;
    /* background-color: var(--purple-100); */
    width: 100%;

    &>* {
    width: 100%;
    margin: 20px 0;
    padding: 0 20px;
    font-size: 30px;
    line-height: 1.2;
  }
  }
`

export const Rectangle = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: #fff;
  padding: 40px 0 40px 40px;
  /* overflow: hidden; */

  /* border: solid 2px blue; */
`

export const Estatisticas = styled.img`
  width: 100%;
  padding-right: 1rem;
  z-index: 3;
`

export const Papeis = styled.img`
  position: absolute;
  bottom: -10%;
  right: 0;
  width: 100%;
  z-index: 2;
`

export const Grafismo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`