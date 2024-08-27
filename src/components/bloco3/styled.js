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
    padding: 10px 0px 10px 0px;
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
  grid-template-columns: 70% 30%;
  background-color: #fff;
  padding: 40px 0 40px 10px;
  overflow-x: hidden;

  @media all and (max-width: 900px) {
    grid-template-columns: 100%;
    padding: 20px 10px 20px 10px;
  }
`

export const Estatisticas = styled.img`
  width: 100%;
  /* padding-right: 1rem; */
  z-index: 3;
`

export const Funil = styled.img`
  position: absolute;
  top: -10%;
  left: 0;
  width: 130%;
  z-index: 2;

  @media all and (max-width: 900px) {
    display: none;
  }
`

export const Grafismo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  @media all and (max-width: 768px) {
    display: none;
  }
`