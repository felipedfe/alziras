import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import relatorios from '../../assets/bloco4/relatorios-3.png';
import {
  Container,
  ImageWrapper,
  Image,
  TitleB4,
  DownloadButton,
  Form,
} from './styled';

const Bloco4Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    ocupacao: '',
    instituicao: '',
    receberInfo: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email) {
      console.log('Formulário enviado:', formData);
      setErrorMessage(''); // Limpa a mensagem de erro quando o formulário é enviado corretamente
      // Lógica para enviar o formulário
    } else {
      setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={relatorios}
          alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
        />
      </ImageWrapper>
      <Box sx={{ padding: '20px', borderRadius: '8px' }}>
        <TitleB4>
          O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
          VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
        </TitleB4>
        <TitleB4>QUER SABER MAIS?</TitleB4>

        {/* <FormWrapper> */}
          <Form onSubmit={handleSubmit}>
            <p style={{ color: 'var(--orange-100)' }}>Preencha os campos do formulário para fazer o download.</p>
            <TextField
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                sx: {
                  color: 'var(--orange-100)', // Cor do label
                  '&.Mui-focused': {
                    color: 'var(--orange-100)', // Cor do label quando focado
                  },
                },
              }}
              // Personalizando a cor da borda em foco e o texto
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--orange-100)', // Borda padrão
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--orange-100)', // Borda ao passar o mouse
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'var(--orange-100)', // Cor do texto que o usuário digita
                },
              }}
            />
            <TextField
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              type="email"
              InputLabelProps={{
                sx: {
                  color: 'var(--orange-100)', // Cor do label
                  '&.Mui-focused': {
                    color: 'var(--orange-100)', // Cor do label quando focado
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--orange-100)', // Borda padrão
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--orange-100)', // Borda ao passar o mouse
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'var(--orange-100)', // Cor do texto que o usuário digita
                },
              }}
            />
            <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <TextField
                label="Ocupação"
                name="ocupacao"
                value={formData.ocupacao}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: 'var(--orange-100)', // Cor do label
                    '&.Mui-focused': {
                      color: 'var(--orange-100)', // Cor do label quando focado
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--orange-100)', // Borda padrão
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--orange-100)', // Borda ao passar o mouse
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--orange-100)', // Cor do texto que o usuário digita
                  },
                }}
              />
              <TextField
                label="Instituição"
                name="instituicao"
                value={formData.instituicao}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: 'var(--orange-100)', // Cor do label
                    '&.Mui-focused': {
                      color: 'var(--orange-100)', // Cor do label quando focado
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--orange-100)', // Borda padrão
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--orange-100)', // Borda ao passar o mouse
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--orange-100)', // Cor do texto que o usuário digita
                  },
                }}
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="receberInfo"
                  checked={formData.receberInfo}
                  onChange={handleChange}
                  sx={{
                    color: 'var(--orange-100)', // Cor do checkbox
                    '&.Mui-checked': {
                      color: 'var(--orange-100)', // Cor quando selecionado
                    },
                  }}
                />
              }
              label="Desejo receber informações sobre o Instituto Alziras."
              sx={{ marginTop: '10px', color: 'var(--orange-100)' }} // Cor do label do checkbox
            />
            <DownloadButton type="submit" sx={{ marginTop: '20px' }}>
              /DOWNLOAD
            </DownloadButton>

            {/* Renderiza a mensagem de erro abaixo do botão, se houver */}
            {errorMessage && (
              <Box sx={{ color: 'red', marginTop: '10px' }}>
                {errorMessage}
              </Box>
            )}
          </Form>
        {/* </FormWrapper> */}

      </Box>
    </Container>
  );
};

export default Bloco4Formulario;
