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
  FormWrapper,
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
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.nome || !formData.email) {
      setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
      setIsLoading(false);
      return;
    }

    setErrorMessage('');

    const formPayload = {
      nome: formData.nome,
      email: formData.email,
      ocupacao: formData.ocupacao,
      instituicao: formData.instituicao,
      receberInfo: formData.receberInfo ? 'Sim' : 'Não',
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwUEgE03DEnibXYvBCRaOP52M5wsPNvi3kcv8tGwZ8TNbE4APkbvPLbdts8b5vAelum/exec', {
        method: 'POST',
        body: JSON.stringify(formPayload),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      });

      console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
      setSubmitted(true);

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setErrorMessage('Houve um problema ao enviar o formulário.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (submitted) {
      const link = document.createElement('a');
      link.href = '/violenciapolitica/Monitor_final_1009.pdf';
      link.setAttribute('download', 'Monitor_da_violencia_politica_de_genero_e_raca.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Container id='relatorio'>
      <ImageWrapper>
        <Image
          src={relatorios}
          alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
        />
      </ImageWrapper>
      {/* <Box sx={{ padding: '20px', borderRadius: '8px' }}> */}
      <FormWrapper>
        {/* <TitleB4>
          O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
          VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
        </TitleB4> */}
        <TitleB4>QUER SABER MAIS?</TitleB4>

        <Form onSubmit={handleSubmit}>
          {!submitted && !isLoading ? (
            <>
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
                    color: 'var(--orange-100)',
                    '&.Mui-focused': {
                      color: 'var(--orange-100)',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--orange-100)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--orange-100)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--orange-100)',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--orange-100)',
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
                    color: 'var(--orange-100)',
                    '&.Mui-focused': {
                      color: 'var(--orange-100)',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--orange-100)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--orange-100)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--orange-100)',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'var(--orange-100)',
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
                      color: 'var(--orange-100)',
                      '&.Mui-focused': {
                        color: 'var(--orange-100)',
                      },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'var(--orange-100)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--orange-100)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--orange-100)',
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--orange-100)',
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
                      color: 'var(--orange-100)',
                      '&.Mui-focused': {
                        color: 'var(--orange-100)',
                      },
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'var(--orange-100)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--orange-100)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--orange-100)',
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--orange-100)',
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
                      color: 'var(--orange-100)',
                      '&.Mui-checked': {
                        color: 'var(--orange-100)',
                      },
                    }}
                  />
                }
                label="Desejo receber informações sobre o Instituto Alziras."
                sx={{ marginTop: '10px', color: 'var(--orange-100)', fontSize: '16px' }}
              />
              <DownloadButton
                type="submit"
                sx={{ marginTop: '20px' }}
              >
                /ENVIAR
              </DownloadButton>
            </>
          ) : (
            <Box display='flex' justifyContent='center' sx={{ padding: '5px' }}>
              {!isLoading && (
                <DownloadButton onClick={handleDownload}>/DOWNLOAD</DownloadButton>
              )}
            </Box>
          )}

          {isLoading && (
            <Box sx={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
              <p style={{ color: '#fff' }}>Enviando...</p>
            </Box>
          )}

          {errorMessage && (
            <Box sx={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
              <p style={{ color: 'red' }}>{errorMessage}</p>
            </Box>
          )}
        </Form>
      </FormWrapper>
      {/* </Box> */}
    </Container>
  );
};

export default Bloco4Formulario;
