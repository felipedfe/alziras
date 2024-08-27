import styled from 'styled-components';
import { Title } from '../../style/reusable-components';

import bgImage from '../../assets/bloco4/fundo-b4.webp';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 50px 5% 50px 0;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media all and (max-width: 1024px) {
    padding: 50px 0 30px 0;
    grid-template-columns: 100%;
  }
`

export const TitleB4 = styled(Title)`
  color: var(--orange-100);
   line-height: 1; 
   text-align: right;

   @media all and (max-width: 1024px) {
    font-size: 30px;
    line-height: 1.1; 
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 110%;
  transform: translateX(-5%);

  @media all and (max-width: 1024px) {
    width: 90%;
    transform: translateX(0);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 30px;
`

export const DownloadButton = styled.button`
  background-color: var(--orange-100);
  border: none;
  color: #fff;
  padding: 10px 15px;
  letter-spacing: 1.5px;
  font-size: 18px;
  cursor: pointer;
  align-self: center;
  margin-top: 16px;
`