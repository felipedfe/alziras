import React from 'react';
import { Box } from '@mui/material';
import {
  Container,
  EstatisticasDesktop,
  EstatisticasMobile,
  Maos,
  GrafismoEsq,
  GrafismoDir,
} from './styled';

import { Title } from '../../style/reusable-components';

import mulheresFunil from '../../assets/bloco2/mulheres-funil.png';
import estatisticas from '../../assets/bloco2/estatisticas.png';
import grafEsquerda from '../../assets/bloco2/grafismo-esquerda.png';
import grafDireita from '../../assets/bloco2/grafismo-direita.png';

import graficoDesktop from '../../assets/bloco2/grafico-desktop.png';
import graficoMobile from '../../assets/bloco2/grafico-mobile.png';
import graficoMid from '../../assets/bloco2/grafico-mid.png';
import maos from '../../assets/bloco2/maos.png';

const Bloco2 = () => {
  return (
    <Container id='monitor'>
      <Box width='100%' height='100%' sx={{ padding: '20px' }}>
        {/* <Title style={{ color: 'var(--orange-100)' }}>
          O QUE É O MONITOR DA VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA?
        </Title> */}
        <Title style={{ color: 'var(--orange-100)' }}>
          O QUE DIZEM OS DADOS?
        </Title>

        <Box display='flex' flexDirection='column' gap='24px' paddingLeft='12px' position='relative' zIndex={3} sx={{ backgroundColor: '#fff' }}>
          {/* <p>
            Fizemos um balanço das 175 representações de violência política de gênero e raça monitoradas pelo Grupo de
            Trabalho de Prevenção e Combate à Violência Política de Gênero (GT-VPG) do Ministério Público Federal
            para entender seus fluxos de tramitação. Desse total, apenas 12 haviam sido convertidas em ação penal
            eleitoral (7%) desde a criação da lei em agosto de 2021 até janeiro de 2024.
          </p>

          <p>
            No universo dessas 12 ações penais eleitorais ajuizadas pelo Ministério Público pelo crime de violência
            política de gênero até janeiro de 2024:
          </p> */}

          <p style={{maxWidth: '800px'}}>
            Um balanço de 175 representações de violência política de gênero e raça monitoradas pelo Grupo de Trabalho de
            Prevenção e Combate à Violência Política de Gênero do Ministério Público Federal revelou que apenas
            12 resultaram em ação penal eleitoral (7%) entre 2021 e 2023.
          </p>

          <Box position='relative' width='100%'>
            <EstatisticasDesktop
              src={graficoDesktop}
              alt='estatísticas de violência contra mulheres'
            />
            <EstatisticasMobile
              src={graficoMid}
              alt='estatísticas de violência contra mulheres'
            />
          </Box>
        </Box>
      </Box>
      <Box position='relative' width='100%'>
        <Maos src={maos} />
      </Box>

      <GrafismoEsq src={grafEsquerda} />
      <GrafismoDir src={grafDireita} />
    </Container>
  )
};

export default Bloco2;
