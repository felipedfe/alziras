import React from 'react';
import { Box } from '@mui/material';
import {
  Container,
  SubTitle,
  ThanksWrapper,
  ImageDesktop,
  ImageMobile,
  ThanksContainer,
  ImageDesktopContainer,
  ImageMobileContainer,
} from './styled';

import { Title } from '../../style/reusable-components';

import maos from '../../assets/bloco6/maos.png';
import maosMobile from '../../assets/bloco6/maos-mobile.png';

const Bloco6 = () => {
  return (
    <>
      <Container>
        <Box width='100%' height='100%' sx={{ padding: '20px' }}>
          <Title>
            COLABORARAM COM ESTA PUBLICAÇÃO
          </Title>

          <ThanksContainer>
            {/* esquerda */}
            <ThanksWrapper>
              <Box>
                <SubTitle>COORDENAÇÃO DA PESQUISA</SubTitle>
                <p>Tauá Pires e Michelle Ferreti</p>
              </Box>

              <Box>
                <SubTitle>ANÁLISES E TEXTO FINAL</SubTitle>
                <p>Mariane dos Santos Almeida Costa</p>
                <p>Ermelinda de Fátima Ireno de Melo</p>
              </Box>

              <Box>
                <SubTitle>REVISÃO</SubTitle>
                <p>Michelle Ferreti</p>
              </Box>

              <Box>
                <SubTitle>COLETA DE DADOS VIA LEI DE ACESSO À INFORMAÇÃO</SubTitle>
                <p>Thayna Jesuina França Yaredy, Maria Paula Russo Riva e Ladyane Katlyn De Souza</p>
              </Box>
            </ThanksWrapper>

            {/* direita */}
            <ThanksWrapper>
              <Box>
                <SubTitle>COLABORAÇÃO E AGRADECIMENTOS</SubTitle>
                <p>
                  Alessandra Simões Reis Abraão, Ana Claudia Sousa Oliveira, Amanda Pimentel, Ana Claudia Oliveira,
                  Bianca Gonçalves e Silva, Carmela Zigoni, Cecilia Gonçalves Batista Lamounier, Cristiane Bernardes,
                  Iasmin Barros, Lucas Renan Silva, Marilia Bonfim, Marília Gomes do Nascimento, Marlise Mattos, Piedade Marques,
                  Raquel Branquinho Pimenta Mamede Nascimento, Roberta Eugenio
                </p>
              </Box>

              <Box>
                <SubTitle>PROJETO GRÁFICO</SubTitle>
                <p>Utopika Estúdio Criativo</p>
              </Box>
            </ThanksWrapper>
          </ThanksContainer>
        </Box>

        <ImageDesktopContainer>
          <ImageDesktop
            src={maos}
            alt='mãos com diversos tons de pele'
          />
        </ImageDesktopContainer>

        <ImageMobileContainer>
          <ImageMobile
            src={maosMobile}
            alt='mãos com diversos tons de pele'
          />
        </ImageMobileContainer>
      </Container>
    </>
  )
};

export default Bloco6;
