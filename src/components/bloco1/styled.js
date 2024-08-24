import styled from 'styled-components';
import bgImage from '../../assets/bloco1/fundo-b1.webp';

export const Container = styled.section`
  background-image: url(${bgImage});
  background-size: cover; /* Garante que a imagem cubra o contêiner */
  background-position: center; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  width: 100%;
  padding: 150px 5% 50px 5%;

  @media all and (max-width: 768px) {
    padding: 150px 0 80px 0;
  }
`

export const Rectangle = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  background-color: #fff;

  @media all and (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`

export const SubTitle = styled.h3`
  color: var(--orange-100); 
  transform: rotate(-0.5deg);
`

export const Image = styled.img`
  position: absolute;
  left: -10%;
  bottom: -10%;
  width: 125%;

  @media all and (max-width: 1200px) {
    display: none;
  }
`