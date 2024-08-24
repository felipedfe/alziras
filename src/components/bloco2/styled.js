import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
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

export const Estatisticas = styled.img`
  position: relative;
  width: 100%;
  z-index: 2;
`

export const MulheresFunil = styled.img`
  position: absolute;
  top: -8%;
  left: 0;
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