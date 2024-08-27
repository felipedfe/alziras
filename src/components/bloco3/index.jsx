import React from 'react';
import { Box } from '@mui/material';
import {
  Container,
  BgContainer,
  TitleWrapper,
  Rectangle,
  Estatisticas,
  Funil,
  Grafismo,
} from './styled';

import { Title } from '../../style/reusable-components';

import estatisticas from '../../assets/bloco3/estatisticas.png';
import ilustraPapeis from '../../assets/bloco3/papeis.png';
import ilustraPapeis2 from '../../assets/bloco3/papeis-2.png';
import grafismo from '../../assets/bloco3/grafismo-b3.png';
import graficoMobile from '../../assets/bloco3/grafico-hi-2.png';
import graficoDesktop from '../../assets/bloco3/grafico-desktop.png';
import funil from '../../assets/bloco3/funil.png';
import funilHi from '../../assets/bloco3/funil-hi.png';

const Bloco3 = () => {
  return (
    <Container position='relative'>
      <BgContainer>
        <Box width='100%' height='100%' sx={{ padding: '20px' }}>
          <TitleWrapper>
            <Title style={{ color: '#fff' }}>
              NENHUMA AÇÃO PENAL ELEITORAL COM JULGAMENTO CONCLUÍDO EM DEFINITIVO ATÉ JANEIRO DE 2024!
            </Title>
          </TitleWrapper>
        </Box >
      </BgContainer>

      <Rectangle>
        <Box position='relative' zIndex={5} sx={{backgroundColor: '#fff'}}>
          <Estatisticas src={graficoMobile} alt='infográfico acoes penais sobre violência de gênero' />
        </Box>

        <Box position='relative'>
          <Funil src={funilHi} />
        </Box>
      </Rectangle>
      <Box position='relative'>
        <Grafismo src={grafismo} />
      </Box>
    </Container>
  )
};

export default Bloco3;
