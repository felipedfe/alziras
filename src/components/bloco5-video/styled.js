import styled from 'styled-components';
import { Title } from '../../style/reusable-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  gap: 1rem;
  width: 100%;
  background-color: #fff;
  padding: 50px 5% 50px 5%;

  /* @media all and (max-width: 768px) {
    padding: 150px 0 80px 0;
  } */

  @media all and (max-width: 1024px) {
  flex-direction: column-reverse;
  /* padding: 150px 0 80px 0; */
  }
`

export const TitleB5 = styled(Title)`

@media all and (max-width: 1024px) {
    text-align: center;
    font-size: 32px;
    line-height: 1.2;
  }


  /* @media all and (max-width: 768px) {
    text-align: center;
    font-size: 28px;
  } */
`

export const SubTitle = styled.h3`
  color: var(--orange-100); 
  transform: rotate(-0.5deg);
`
