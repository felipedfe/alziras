import React from 'react';
import { Box } from '@mui/material';
import {
  Container,
  TitleB5,
  SubTitle,
  Video,
  VideoWrapper
} from './styled';

import { Title } from '../../style/reusable-components';

import VideoContainer from '../video-container';

const Bloco5Video = () => {
  return (
    <Container id="denuncie">
      <Box width='100%' height='100%' sx={{ padding: '20px' }}>
        <Title>
          COMO DENUNCIAR?
        </Title>

        <Box display='flex' flexDirection='column' gap='16px' paddingLeft='12px'>
          <p>
            Presenciou algum episódio de violência política de gênero e raça?
            Conhece alguém que está passando por isso?
          </p>

          {/* <SubTitle>
            VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA É CRIME! DENUNCIE!
          </SubTitle> */}

          <p>
            Qualquer pessoa pode fazer a denúncia. Assista o vídeo e saiba como!
          </p>

        </Box>
        <TitleB5 style={{ color: 'var(--orange-100)', marginTop: '50px' }}>
          PRECISA DE APOIO PARA FAZER UMA DENÚNCIA? CONTE CONOSCO! MANDE UMA MENSAGEM PARA
          <span style={{ color: 'var(--purple-100)' }}>
            <span style={{ color: 'var(--orange-100)' }}> (</span>61<span style={{ color: 'var(--orange-100)' }}>)</span> 3771-1071.</span>
        </TitleB5>
      </Box>
      {/* <Box width='100%' display='flex' alignItems='center'>
        <VideoContainer
          url='https://www.youtube.com/embed/X110K8HEWhA'
          controls='1'
        />
      </Box> */}
      <Box width='100%' display='flex' flexDirection='column' justifyContent='center' gap='20px'>
        <VideoWrapper>
          <Video
            title="video-container"
            src={`https://www.youtube.com/embed/R0qAXHbCUUA?si=6ZDPBZy7SIs6_vLz`}
            frameBorder="0"
            allow="autoplay"
            loading="lazy"
          />
        </VideoWrapper>

        <a href='/violenciapolitica/modelo-denuncia.docx' download='Modelo_de_denuncia_de_Violencia_Politica_de_Genero_e_ Raca.docx'>
          Baixe aqui o Modelo para Denúncia de Violência Política de Gênero e Raça ao Ministério Público
        </a>
      </Box>
    </Container>
  )
};

export default Bloco5Video;
