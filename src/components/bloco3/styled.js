import styled from "styled-components";
// import bgImage from '../../assets/bloco3/fundo-b3.webp';
import bgImageMobile from '../../assets/bloco3/fundo-b3-mobile.webp';
import bgImage from '../../assets/bloco1/fundo-b1.webp';

export const Container = styled.section`

`

export const BgContainer = styled.section`
  background-image: url(${bgImage});
  background-size: cover; /* Garante que a imagem cubra o contêiner */
  background-position: top; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  width: 100%;
  padding: 60px 5% 10px 5%;

  @media all and (max-width: 1024px) {
    padding: 30px 20px 0px 20px;
    /* background-image: url(${bgImageMobile}); */
  }

  @media all and (max-width: 768px) {
    padding: 10px 0px 0px 0px;
  }
`

export const BgContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media all and (max-width: 768px) {
    padding: 0 20px;
  }
`

export const TitleWrapper = styled.div`
  &>* {
    width: 60%;
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) */
    background-color: #fff;
    padding: 20px;
  }

  @media all and (max-width: 768px) {
    display: flex;
    justify-content: center;
    /* background-color: var(--purple-100); */
    width: 100%;

    &>* {
    width: 100%;
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 30px;
    line-height: 1.2;
  }
  }
`

export const Rectangle = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: #fff;
  padding: 15px 0 40px 10px;
  min-width: 0;
  overflow-x: hidden;

  @media all and (max-width: 900px) {
    grid-template-columns: 100%;
    padding: 10px 3px 20px 3px;
  }
`

export const EstatisticasDesk = styled.img`
  width: 100%;
  /* padding-right: 1rem; */
  z-index: 3;

  @media all and (max-width: 768px) {
    display: none;
  }
`

export const EstatisticasMobile = styled.img`
  width: 100%;
  /* padding-right: 1rem; */
  z-index: 3;

  @media all and (min-width: 769px) {
    display: none;
  }
`

export const Funil = styled.img`
  position: absolute;
  bottom: -3%;
  left: 0;
  width: 120%;
  z-index: 4;

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