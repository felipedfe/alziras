import React from 'react';
import { Box } from '@mui/material';

import logoAlziras from '../../assets/footer/logo-alziras.png';
import logoAfd from '../../assets/footer/logo-afd.png';
import logoOnmp from '../../assets/footer/logo-onmp.png';
import grafismo from '../../assets/footer/grafismo-hi.png';

import {
  Container,
  Wrapper,
  Image,
  ImageWrapper,
  Graph,
  GraphWrapper,
} from './styled';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <p style={{ color: 'var(--orange-100)' }}>Realização</p>
        <ImageWrapper>
          <Image src={logoAlziras} alt='Instituto Alziras' />
        </ImageWrapper>
      </Wrapper>

      <Wrapper>
        <p style={{ color: 'var(--orange-100)' }}>Financiado por</p>
        <ImageWrapper>
          <Image src={logoAfd} alt='Agence Francaise de developpement' />
        </ImageWrapper>
      </Wrapper>

      <Wrapper>
        <p style={{ color: 'var(--orange-100)' }}>Apoio</p>
        <ImageWrapper>
          <Image src={logoOnmp} alt='Observatório Nacional da Mulher na Política' />
        </ImageWrapper>
      </Wrapper>

      <GraphWrapper>
        <Graph src={grafismo} />
      </GraphWrapper>
    </Container >
  )
};

export default Footer;
