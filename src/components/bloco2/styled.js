import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 80% 15%;
  gap: 10px;
  width: 100%;
  padding: 50px 5% 50px 5%;
  overflow: hidden;
  /* border: solid 2px blue; */

  @media all and (max-width: 1024px) {
    grid-template-columns: 100%;
  }

  @media all and (max-width: 768px) {
    padding: 50px 0 50px 0;
  }
`

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap:24px;
  padding-left:12px;
`

export const EstatisticasDesktop = styled.img`
  position: relative;
  width: 100%;
  z-index: 2;

  @media all and (max-width: 768px) {
    display: none;
  }
`

export const EstatisticasMobile = styled.img`
  position: relative;
  width: 100%;
  z-index: 2;

  @media all and (min-width: 769px) {
    display: none;
  }
`

export const Maos = styled.img`
  position: absolute;
  top: 10%;
  left: -5%;
  z-index: 1;
  /* width: 125%; */

  @media all and (max-width: 1024px) {
    display: none;
  }
`

export const GrafismoEsq = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

export const GrafismoDir = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
`