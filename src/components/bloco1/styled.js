import styled from 'styled-components';
import bgImage from '../../assets/bloco1/fundo-b1.webp';

// HEADER

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding: 60px 0 40px 0;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`

`

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  background-color: var(--purple-100);
  padding: 10px;
  flex-wrap: wrap;

  @media all and (max-width: 400px) {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    gap: 10px;

  }
`

export const MenuButton = styled.button`
  /* font-size: 20px; */
  color: #fff;
  border: none;
  background-color: transparent;
  letter-spacing: 1.5px;
  cursor: pointer;
`

//

export const Container = styled.section`
  background-image: url(${bgImage});
  background-size: cover; /* Garante que a imagem cubra o contêiner */
  background-position: center; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  width: 100%;
  padding: 0 5% 50px 5%;

  @media all and (max-width: 768px) {
    padding: 0px 0 80px 0;
    background-size: auto;
    background-position: top;
    background-repeat: repeat;
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