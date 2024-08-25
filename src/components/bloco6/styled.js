import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: var(--purple-200);
  padding: 50px 5% 50px 5%;
  overflow: hidden;

  @media all and (max-width: 1024px) {
    padding: 50px 0 50px 0;
    grid-template-columns: 100%;
  }
`

export const SubTitle = styled.h4`
  margin-bottom: 4px;
`

export const ThanksContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding-left: 12px;
  padding-top: 20px;

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 12px;
  }
`

export const ThanksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ImageDesktopContainer = styled.div`
  position: relative;
  width: 100%;

  @media all and (max-width: 1024px) {
    display: none;
  }
`

export const ImageMobileContainer = styled.div`
  width: 100%;
  height: 200px;

  @media all and (min-width: 1025px) {
    display: none;
  }
`

export const Image = styled.img`
  position: absolute;
  right: -15%;
  bottom: -12%;
  width: 110%;
`

export const ImageMobile = styled.img`
  width: 100%;
`