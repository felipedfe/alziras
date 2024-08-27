import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* height: 200px; */
  padding: 50px 80px;
  width: 100%;
  background-color: var(--purple-100);

  @media all and (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Image = styled.img`
  width: 100%;
`

export const ImageWrapper = styled.div`
  /* width: 140px; */
`