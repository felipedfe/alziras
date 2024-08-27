import React from 'react';
import { Box } from '@mui/material';
import {
  Container,
  Rectangle,
  Image,
  // Title,
  SubTitle,
  HeaderWrapper,
  Logo,
  Navigation,
  MenuButton,
} from './styled';

import { Title } from '../../style/reusable-components';

import maosUrna from '../../assets/bloco1/maos-urna-2.png';
import mulheresUrna from '../../assets/bloco1/mulheres-urna.png';
import logo from '../../assets/header/logo.png';

const Bloco1 = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log('section:',section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <HeaderWrapper>
        <Logo src={logo} alt='logo Alziras' />
        <Navigation>
          <MenuButton>/MENU</MenuButton>
          <MenuButton onClick={() => scrollToSection('monitor')}>/O MONITOR</MenuButton>
          <MenuButton onClick={() => scrollToSection('relatorio')}>/RELATÓRIO COMPLETO </MenuButton>
          <MenuButton onClick={() => scrollToSection('denuncie')} style={{ color: 'var(--orange-100)' }}>/DENUNCIE</MenuButton>
        </Navigation>
      </HeaderWrapper>
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

            {/* <p>
              Esperamos contribuir para a consolidação de sistemas e redes de proteção, prevenção e enfrentamento da violência
              política de gênero e raça, de forma que todas as mulheres brasileiras possam participar da política em
              condições de segurança e igualdade, livres de assédio, ameaças e discriminação, inspirando meninas e jovens
              das gerações atuais e futuras para que possam seguir pelo mesmo caminho.
            </p> */}
          </Box>

        </Box>
        <Box position='relative' width='100%'>
          <Image
            src={mulheresUrna}
            alt='mão saindo de dentro de uma urna eletrônica'
          />
        </Box>
      </Rectangle>
    </Container>
  )
};

export default Bloco1;
