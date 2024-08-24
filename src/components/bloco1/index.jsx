import React from 'react';
import { Box } from '@mui/material';
import {
  Container,
  Rectangle,
  Image,
  // Title,
  SubTitle
} from './styled';

import { Title } from '../../style/reusable-components';

import maosUrna from '../../assets/bloco1/maos-urna-2.png';

const Bloco1 = () => {
  return (
    <Container>
      <Rectangle>
        <Box width='100%' height='100%' sx={{ padding: '20px' }}>
          <Title>
            PROTEGER AS MULHERES NA POLÍTICA
            É FORTALECER A DEMOCRACIA
          </Title>

          <Box display='flex' flexDirection='column' gap='24px' paddingLeft='12px'>
            <p>
              A violência política de gênero e raça impede as mulheres brasileiras, em sua diversidade, de exercer
              seus direitos políticos e de participar de decisões que afetam a vida coletiva.
            </p>

            <SubTitle>
              POR ISSO, TODA A SOCIEDADE E A DEMOCRACIA TAMBÉM SÃO VÍTIMAS DESSE CRIME!
            </SubTitle>

            <p>
              O <strong>Monitor da Violência Política de Gênero e Raça</strong> é uma ferramenta desenvolvida pelo Instituto Alziras para
              acompanhar a implementação da Lei de Violência Política de Gênero (Lei 14.192/2021) e para impulsionar uma
              política mais representativa, plural e inclusiva.
            </p>

            <p>
              Esperamos contribuir para a consolidação de sistemas e redes de proteção, prevenção e enfrentamento da violência
              política de gênero e raça, de forma que todas as mulheres brasileiras possam participar da política em
              condições de segurança e igualdade, livres de assédio, ameaças e discriminação, inspirando meninas e jovens
              das gerações atuais e futuras para que possam seguir pelo mesmo caminho.
            </p>
          </Box>

        </Box>
        <Box position='relative' width='100%'>
          <Image
            src={maosUrna}
            alt='mão saindo de dentro de uma urna eletrônica'
          />
        </Box>
      </Rectangle>
    </Container>
  )
};

export default Bloco1;
