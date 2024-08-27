import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background-color: var(--orange-100); */
`

export const Content = styled.section`
  width: 100%;
  max-width: 1400px;
`

export const Title = styled.h1`
  margin-bottom: 16px;

  @media all and (max-width: 768px) {
    text-align: center;
    font-size: 38px;
    margin-bottom: 20px;
  }
`
