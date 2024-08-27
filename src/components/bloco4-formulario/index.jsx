// import React, { useState } from 'react';
// import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
// import relatorios from '../../assets/bloco4/relatorios-3.png';
// import {
//   Container,
//   ImageWrapper,
//   Image,
//   TitleB4,
//   DownloadButton,
//   Form,
// } from './styled';

// const Bloco4Formulario = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     ocupacao: '',
//     instituicao: '',
//     receberInfo: false,
//   });

//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.nome && formData.email) {
//       console.log('Formulário enviado:', formData);
//       setErrorMessage(''); // Limpa a mensagem de erro quando o formulário é enviado corretamente
//       // Lógica para enviar o formulário
//     } else {
//       setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
//     }
//   };

//   return (
//     <Container id='relatorio'>
//       <ImageWrapper>
//         <Image
//           src={relatorios}
//           alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
//         />
//       </ImageWrapper>
//       <Box sx={{ padding: '20px', borderRadius: '8px' }}>
//         <TitleB4>
//           O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
//           VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
//         </TitleB4>
//         <TitleB4>QUER SABER MAIS?</TitleB4>

//         {/* <FormWrapper> */}
//           <Form onSubmit={handleSubmit}>
//             <p style={{ color: 'var(--orange-100)' }}>Preencha os campos do formulário para fazer o download.</p>
//             <TextField
//               label="Nome"
//               name="nome"
//               value={formData.nome}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//               InputLabelProps={{
//                 sx: {
//                   color: 'var(--orange-100)', // Cor do label
//                   '&.Mui-focused': {
//                     color: 'var(--orange-100)', // Cor do label quando focado
//                   },
//                 },
//               }}
//               // Personalizando a cor da borda em foco e o texto
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'var(--orange-100)', // Borda padrão
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'var(--orange-100)', // Borda ao passar o mouse
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
//                   },
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'var(--orange-100)', // Cor do texto que o usuário digita
//                 },
//               }}
//             />
//             <TextField
//               label="E-mail"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//               type="email"
//               InputLabelProps={{
//                 sx: {
//                   color: 'var(--orange-100)', // Cor do label
//                   '&.Mui-focused': {
//                     color: 'var(--orange-100)', // Cor do label quando focado
//                   },
//                 },
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'var(--orange-100)', // Borda padrão
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'var(--orange-100)', // Borda ao passar o mouse
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
//                   },
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'var(--orange-100)', // Cor do texto que o usuário digita
//                 },
//               }}
//             />
//             <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//               <TextField
//                 label="Ocupação"
//                 name="ocupacao"
//                 value={formData.ocupacao}
//                 onChange={handleChange}
//                 fullWidth
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)', // Cor do label
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)', // Cor do label quando focado
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)', // Borda padrão
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)', // Borda ao passar o mouse
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)', // Cor do texto que o usuário digita
//                   },
//                 }}
//               />
//               <TextField
//                 label="Instituição"
//                 name="instituicao"
//                 value={formData.instituicao}
//                 onChange={handleChange}
//                 fullWidth
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)', // Cor do label
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)', // Cor do label quando focado
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)', // Borda padrão
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)', // Borda ao passar o mouse
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)', // Borda quando o campo está em foco
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)', // Cor do texto que o usuário digita
//                   },
//                 }}
//               />
//             </Box>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="receberInfo"
//                   checked={formData.receberInfo}
//                   onChange={handleChange}
//                   sx={{
//                     color: 'var(--orange-100)', // Cor do checkbox
//                     '&.Mui-checked': {
//                       color: 'var(--orange-100)', // Cor quando selecionado
//                     },
//                   }}
//                 />
//               }
//               label="Desejo receber informações sobre o Instituto Alziras."
//               sx={{ marginTop: '10px', color: 'var(--orange-100)', fontSize: '16px' }} // Cor do label do checkbox
//             />
//             <DownloadButton type="submit" sx={{ marginTop: '20px' }}>
//               /DOWNLOAD
//             </DownloadButton>

//             {/* Renderiza a mensagem de erro abaixo do botão, se houver */}
//             {errorMessage && (
//               <Box sx={{ color: 'red', marginTop: '10px' }}>
//                 {errorMessage}
//               </Box>
//             )}
//           </Form>
//         {/* </FormWrapper> */}

//       </Box>
//     </Container>
//   );
// };

// export default Bloco4Formulario;




// import React, { useState } from 'react';
// import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
// import relatorios from '../../assets/bloco4/relatorios-3.png';
// import {
//   Container,
//   ImageWrapper,
//   Image,
//   TitleB4,
//   DownloadButton,
//   Form,
// } from './styled';

// const Bloco4Formulario = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     ocupacao: '',
//     instituicao: '',
//     receberInfo: false,
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     event.preventDefault();
//     setIsLoading(true);

//     if (!formData.nome || !formData.email) {
//       setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
//       return;
//     }

//     setErrorMessage(''); // Limpa mensagem de erro, se houver

//     // Configurar o corpo da requisição com os dados do formulário
//     const formPayload = {
//       nome: formData.nome,
//       email: formData.email,
//       ocupacao: formData.ocupacao,
//       instituicao: formData.instituicao,
//       receberInfo: formData.receberInfo ? 'Sim' : 'Não', // Convertendo para "Sim" ou "Não"
//     };

//     console.log('payload:', formPayload)

//     try {
//       // Fazer a requisição POST para o Google Apps Script
//       const response = await fetch('https://script.google.com/macros/s/AKfycbwUEgE03DEnibXYvBCRaOP52M5wsPNvi3kcv8tGwZ8TNbE4APkbvPLbdts8b5vAelum/exec', {
//         method: 'POST',
//         body: JSON.stringify(formPayload),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'no-cors', // Adicionando no-cors
//       });

//       console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
//       setSubmitted(true);

//     } catch (error) {
//       console.error('Erro ao enviar os dados:', error);
//       setErrorMessage('Houve um problema ao enviar o formulário.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Container id='relatorio'>
//       <ImageWrapper>
//         <Image
//           src={relatorios}
//           alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
//         />
//       </ImageWrapper>
//       <Box sx={{ padding: '20px', borderRadius: '8px' }}>
//         <TitleB4>
//           O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
//           VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
//         </TitleB4>
//         <TitleB4>QUER SABER MAIS?</TitleB4>

//         <Form onSubmit={handleSubmit}>
//           <p style={{ color: 'var(--orange-100)' }}>Preencha os campos do formulário para fazer o download.</p>
//           <TextField
//             label="Nome"
//             name="nome"
//             value={formData.nome}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             required
//             InputLabelProps={{
//               sx: {
//                 color: 'var(--orange-100)',
//                 '&.Mui-focused': {
//                   color: 'var(--orange-100)',
//                 },
//               },
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: 'var(--orange-100)',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: 'var(--orange-100)',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: 'var(--orange-100)',
//                 },
//               },
//               '& .MuiInputBase-input': {
//                 color: 'var(--orange-100)',
//               },
//             }}
//           />
//           <TextField
//             label="E-mail"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             required
//             type="email"
//             InputLabelProps={{
//               sx: {
//                 color: 'var(--orange-100)',
//                 '&.Mui-focused': {
//                   color: 'var(--orange-100)',
//                 },
//               },
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: 'var(--orange-100)',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: 'var(--orange-100)',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: 'var(--orange-100)',
//                 },
//               },
//               '& .MuiInputBase-input': {
//                 color: 'var(--orange-100)',
//               },
//             }}
//           />
//           <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//             <TextField
//               label="Ocupação"
//               name="ocupacao"
//               value={formData.ocupacao}
//               onChange={handleChange}
//               fullWidth
//               InputLabelProps={{
//                 sx: {
//                   color: 'var(--orange-100)',
//                   '&.Mui-focused': {
//                     color: 'var(--orange-100)',
//                   },
//                 },
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'var(--orange-100)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'var(--orange-100)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'var(--orange-100)',
//                   },
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'var(--orange-100)',
//                 },
//               }}
//             />
//             <TextField
//               label="Instituição"
//               name="instituicao"
//               value={formData.instituicao}
//               onChange={handleChange}
//               fullWidth
//               InputLabelProps={{
//                 sx: {
//                   color: 'var(--orange-100)',
//                   '&.Mui-focused': {
//                     color: 'var(--orange-100)',
//                   },
//                 },
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'var(--orange-100)',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'var(--orange-100)',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'var(--orange-100)',
//                   },
//                 },
//                 '& .MuiInputBase-input': {
//                   color: 'var(--orange-100)',
//                 },
//               }}
//             />
//           </Box>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="receberInfo"
//                 checked={formData.receberInfo}
//                 onChange={handleChange}
//                 sx={{
//                   color: 'var(--orange-100)',
//                   '&.Mui-checked': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//             }
//             label="Desejo receber informações sobre o Instituto Alziras."
//             sx={{ marginTop: '10px', color: 'var(--orange-100)', fontSize: '16px' }}
//           />
//           <DownloadButton type="submit" sx={{ marginTop: '20px' }}>
//             /DOWNLOAD
//           </DownloadButton>

//           {errorMessage && (
//             <Box display='flex' justifyContentsx='center' sx={{ marginTop: '10px', width: '100%',textAlign: 'center' }}>
//               <p style={{ color: 'red' }}>{errorMessage}</p>
//             </Box>
//           )}
//         </Form>
//       </Box>
//     </Container>
//   );
// };

// export default Bloco4Formulario;


// import React, { useState } from 'react';
// import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
// import relatorios from '../../assets/bloco4/relatorios-3.png';
// import {
//   Container,
//   ImageWrapper,
//   Image,
//   TitleB4,
//   DownloadButton,
//   Form,
// } from './styled';

// const Bloco4Formulario = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     ocupacao: '',
//     instituicao: '',
//     receberInfo: false,
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (!formData.nome || !formData.email) {
//       setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
//       setIsLoading(false);
//       return;
//     }

//     setErrorMessage('');

//     const formPayload = {
//       nome: formData.nome,
//       email: formData.email,
//       ocupacao: formData.ocupacao,
//       instituicao: formData.instituicao,
//       receberInfo: formData.receberInfo ? 'Sim' : 'Não',
//     };

//     try {
//       const response = await fetch('https://script.google.com/macros/s/AKfycbwUEgE03DEnibXYvBCRaOP52M5wsPNvi3kcv8tGwZ8TNbE4APkbvPLbdts8b5vAelum/exec', {
//         method: 'POST',
//         body: JSON.stringify(formPayload),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'no-cors',
//       });

//       console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
//       setSubmitted(true); // Marcar como enviado com sucesso

//     } catch (error) {
//       console.error('Erro ao enviar os dados:', error);
//       setErrorMessage('Houve um problema ao enviar o formulário.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Container id='relatorio'>
//       <ImageWrapper>
//         <Image
//           src={relatorios}
//           alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
//         />
//       </ImageWrapper>
//       <Box sx={{ padding: '20px', borderRadius: '8px' }}>
//         <TitleB4>
//           O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
//           VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
//         </TitleB4>
//         <TitleB4>QUER SABER MAIS?</TitleB4>

//         <Form onSubmit={handleSubmit}>
//           {!submitted && !isLoading ? (
//             <>
//               <p style={{ color: 'var(--orange-100)' }}>Preencha os campos do formulário para fazer o download.</p>
//               <TextField
//                 label="Nome"
//                 name="nome"
//                 value={formData.nome}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 required
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)',
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)',
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//               <TextField
//                 label="E-mail"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 required
//                 type="email"
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)',
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)',
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//               <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//                 <TextField
//                   label="Ocupação"
//                   name="ocupacao"
//                   value={formData.ocupacao}
//                   onChange={handleChange}
//                   fullWidth
//                   InputLabelProps={{
//                     sx: {
//                       color: 'var(--orange-100)',
//                       '&.Mui-focused': {
//                         color: 'var(--orange-100)',
//                       },
//                     },
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'var(--orange-100)',
//                     },
//                   }}
//                 />
//                 <TextField
//                   label="Instituição"
//                   name="instituicao"
//                   value={formData.instituicao}
//                   onChange={handleChange}
//                   fullWidth
//                   InputLabelProps={{
//                     sx: {
//                       color: 'var(--orange-100)',
//                       '&.Mui-focused': {
//                         color: 'var(--orange-100)',
//                       },
//                     },
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'var(--orange-100)',
//                     },
//                   }}
//                 />
//               </Box>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="receberInfo"
//                     checked={formData.receberInfo}
//                     onChange={handleChange}
//                     sx={{
//                       color: 'var(--orange-100)',
//                       '&.Mui-checked': {
//                         color: 'var(--orange-100)',
//                       },
//                     }}
//                   />
//                 }
//                 label="Desejo receber informações sobre o Instituto Alziras."
//                 sx={{ marginTop: '10px', color: 'var(--orange-100)', fontSize: '16px' }}
//               />
//               <DownloadButton type="submit" sx={{ marginTop: '20px' }}>
//                 /DOWNLOAD
//               </DownloadButton>
//             </>
//           ) : (
//             <Box display='flex' justifyContent='center' sx={{ padding: '5px'}}>
//               <p style={{color: '#fff'}}> {isLoading ? "Enviando..." : "Download iniciado!"}</p>
//             </Box>
//           )}

//           {errorMessage && (
//             <Box sx={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
//               <p style={{ color: 'red' }}>{errorMessage}</p>
//             </Box>
//           )}
//         </Form>
//       </Box>
//     </Container>
//   );
// };

// export default Bloco4Formulario;


// import React, { useState } from 'react';
// import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
// import relatorios from '../../assets/bloco4/relatorios-3.png';
// import {
//   Container,
//   ImageWrapper,
//   Image,
//   TitleB4,
//   DownloadButton,
//   Form,
// } from './styled';

// const Bloco4Formulario = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     ocupacao: '',
//     instituicao: '',
//     receberInfo: false,
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (!formData.nome || !formData.email) {
//       setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
//       setIsLoading(false);
//       return;
//     }

//     setErrorMessage('');

//     const formPayload = {
//       nome: formData.nome,
//       email: formData.email,
//       ocupacao: formData.ocupacao,
//       instituicao: formData.instituicao,
//       receberInfo: formData.receberInfo ? 'Sim' : 'Não',
//     };

//     try {
//       const response = await fetch('https://script.google.com/macros/s/AKfycbwUEgE03DEnibXYvBCRaOP52M5wsPNvi3kcv8tGwZ8TNbE4APkbvPLbdts8b5vAelum/exec', {
//         method: 'POST',
//         body: JSON.stringify(formPayload),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'no-cors',
//       });

//       console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
//       setSubmitted(true); // Marcar como enviado com sucesso

//     } catch (error) {
//       console.error('Erro ao enviar os dados:', error);
//       setErrorMessage('Houve um problema ao enviar o formulário.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = () => {
//     if (submitted) {
//       const link = document.createElement('a');
//       link.href = '/path-to-your-pdf-file.pdf'; // Aqui vai o caminho do seu PDF
//       link.setAttribute('download', 'relatorio.pdf');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <Container id='relatorio'>
//       <ImageWrapper>
//         <Image
//           src={relatorios}
//           alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
//         />
//       </ImageWrapper>
//       <Box sx={{ padding: '20px', borderRadius: '8px' }}>
//         <TitleB4>
//           O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
//           VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
//         </TitleB4>
//         <TitleB4>QUER SABER MAIS?</TitleB4>

//         <Form onSubmit={handleSubmit}>
//           {!submitted && !isLoading ? (
//             <>
//               <p style={{ color: 'var(--orange-100)' }}>Preencha os campos do formulário para fazer o download.</p>
//               <TextField
//                 label="Nome"
//                 name="nome"
//                 value={formData.nome}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 required
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)',
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)',
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//               <TextField
//                 label="E-mail"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 required
//                 type="email"
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)',
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)',
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//               <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//                 <TextField
//                   label="Ocupação"
//                   name="ocupacao"
//                   value={formData.ocupacao}
//                   onChange={handleChange}
//                   fullWidth
//                   InputLabelProps={{
//                     sx: {
//                       color: 'var(--orange-100)',
//                       '&.Mui-focused': {
//                         color: 'var(--orange-100)',
//                       },
//                     },
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'var(--orange-100)',
//                     },
//                   }}
//                 />
//                 <TextField
//                   label="Instituição"
//                   name="instituicao"
//                   value={formData.instituicao}
//                   onChange={handleChange}
//                   fullWidth
//                   InputLabelProps={{
//                     sx: {
//                       color: 'var(--orange-100)',
//                       '&.Mui-focused': {
//                         color: 'var(--orange-100)',
//                       },
//                     },
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'var(--orange-100)',
//                     },
//                   }}
//                 />
//               </Box>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="receberInfo"
//                     checked={formData.receberInfo}
//                     onChange={handleChange}
//                     sx={{
//                       color: 'var(--orange-100)',
//                       '&.Mui-checked': {
//                         color: 'var(--orange-100)',
//                       },
//                     }}
//                   />
//                 }
//                 label="Desejo receber informações sobre o Instituto Alziras."
//                 sx={{ marginTop: '10px', color: 'var(--orange-100)', fontSize: '16px' }}
//               />
//               <DownloadButton
//                 type="submit"
//                 sx={{ marginTop: '20px' }}
//               >
//                 Enviar
//               </DownloadButton>
//             </>
//           ) : (
//             <Box display='flex' justifyContent='center' sx={{ padding: '5px'}}>
//               <p style={{color: '#fff'}}> {isLoading ? "Enviando..." : "Download iniciado!"}</p>
//               {!isLoading && <DownloadButton onClick={handleDownload}>Baixar PDF</DownloadButton>}
//             </Box>
//           )}

//           {errorMessage && (
//             <Box sx={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
//               <p style={{ color: 'red' }}>{errorMessage}</p>
//             </Box>
//           )}
//         </Form>
//       </Box>
//     </Container>
//   );
// };

// export default Bloco4Formulario;


// import React, { useState } from 'react';
// import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
// import relatorios from '../../assets/bloco4/relatorios-3.png';
// import {
//   Container,
//   ImageWrapper,
//   Image,
//   TitleB4,
//   DownloadButton,
//   Form,
// } from './styled';

// const Bloco4Formulario = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     ocupacao: '',
//     instituicao: '',
//     receberInfo: false,
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (!formData.nome || !formData.email) {
//       setErrorMessage('Por favor, preencha os campos Nome e E-mail.');
//       setIsLoading(false);
//       return;
//     }

//     setErrorMessage('');

//     const formPayload = {
//       nome: formData.nome,
//       email: formData.email,
//       ocupacao: formData.ocupacao,
//       instituicao: formData.instituicao,
//       receberInfo: formData.receberInfo ? 'Sim' : 'Não',
//     };

//     try {
//       const response = await fetch('https://script.google.com/macros/s/AKfycbwUEgE03DEnibXYvBCRaOP52M5wsPNvi3kcv8tGwZ8TNbE4APkbvPLbdts8b5vAelum/exec', {
//         method: 'POST',
//         body: JSON.stringify(formPayload),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'no-cors',
//       });

//       console.log('Dados enviados, resposta não disponível devido ao modo no-cors');
//       setSubmitted(true); // Marcar como enviado com sucesso

//     } catch (error) {
//       console.error('Erro ao enviar os dados:', error);
//       setErrorMessage('Houve um problema ao enviar o formulário.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDownload = () => {
//     if (submitted) {
//       const link = document.createElement('a');
//       link.href = '/path-to-your-pdf-file.pdf'; // Aqui vai o caminho do seu PDF
//       link.setAttribute('download', 'relatorio.pdf');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <Container id='relatorio'>
//       <ImageWrapper>
//         <Image
//           src={relatorios}
//           alt='relatórios - Monitor da Violência Política e de Gênero e Raça 2021/2023'
//         />
//       </ImageWrapper>
//       <Box sx={{ padding: '20px', borderRadius: '8px' }}>
//         <TitleB4>
//           O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
//           VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
//         </TitleB4>
//         <TitleB4>QUER SABER MAIS?</TitleB4>

//         <Form onSubmit={handleSubmit}>
//           {!submitted && !isLoading ? (
//             <>
//               <p style={{ color: 'var(--orange-100)' }}>Preencha os campos do formulário para fazer o download.</p>
//               <TextField
//                 label="Nome"
//                 name="nome"
//                 value={formData.nome}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 required
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)',
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)',
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//               <TextField
//                 label="E-mail"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 required
//                 type="email"
//                 InputLabelProps={{
//                   sx: {
//                     color: 'var(--orange-100)',
//                     '&.Mui-focused': {
//                       color: 'var(--orange-100)',
//                     },
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&:hover fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: 'var(--orange-100)',
//                     },
//                   },
//                   '& .MuiInputBase-input': {
//                     color: 'var(--orange-100)',
//                   },
//                 }}
//               />
//               <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//                 <TextField
//                   label="Ocupação"
//                   name="ocupacao"
//                   value={formData.ocupacao}
//                   onChange={handleChange}
//                   fullWidth
//                   InputLabelProps={{
//                     sx: {
//                       color: 'var(--orange-100)',
//                       '&.Mui-focused': {
//                         color: 'var(--orange-100)',
//                       },
//                     },
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'var(--orange-100)',
//                     },
//                   }}
//                 />
//                 <TextField
//                   label="Instituição"
//                   name="instituicao"
//                   value={formData.instituicao}
//                   onChange={handleChange}
//                   fullWidth
//                   InputLabelProps={{
//                     sx: {
//                       color: 'var(--orange-100)',
//                       '&.Mui-focused': {
//                         color: 'var(--orange-100)',
//                       },
//                     },
//                   }}
//                   sx={{
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&:hover fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                       '&.Mui-focused fieldset': {
//                         borderColor: 'var(--orange-100)',
//                       },
//                     },
//                     '& .MuiInputBase-input': {
//                       color: 'var(--orange-100)',
//                     },
//                   }}
//                 />
//               </Box>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="receberInfo"
//                     checked={formData.receberInfo}
//                     onChange={handleChange}
//                     sx={{
//                       color: 'var(--orange-100)',
//                       '&.Mui-checked': {
//                         color: 'var(--orange-100)',
//                       },
//                     }}
//                   />
//                 }
//                 label="Desejo receber informações sobre o Instituto Alziras."
//                 sx={{ marginTop: '10px', color: 'var(--orange-100)', fontSize: '16px' }}
//               />
//               <DownloadButton
//                 type="submit"
//                 sx={{ marginTop: '20px' }}
//               >
//                 Enviar
//               </DownloadButton>
//             </>
//           ) : (
//             <Box display='flex' justifyContent='center' sx={{ padding: '5px'}}>
//               <p style={{color: '#fff'}}> {isLoading ? "Enviando..." : "Download iniciado!"}</p>
//               {!isLoading && <DownloadButton onClick={handleDownload}>Baixar PDF</DownloadButton>}
//             </Box>
//           )}

//           {errorMessage && (
//             <Box sx={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
//               <p style={{ color: 'red' }}>{errorMessage}</p>
//             </Box>
//           )}
//         </Form>
//       </Box>
//     </Container>
//   );
// };

// export default Bloco4Formulario;


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
      setSubmitted(true); // Marcar como enviado com sucesso

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
      link.href = '/monitor-final-revisado.pdf'; // Aqui vai o caminho do seu PDF
      link.setAttribute('download', 'relatorio-alziras.pdf');
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
      <Box sx={{ padding: '20px', borderRadius: '8px' }}>
        <TitleB4>
          O RELATÓRIO DE PESQUISA DISCUTE AINDA COMO AS CASAS LEGISLATIVAS VÊM LIDANDO COM A
          VIOLÊNCIA POLÍTICA DE GÊNERO E RAÇA E APRESENTA RECOMENDAÇÕES.
        </TitleB4>
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
            <Box display='flex' justifyContent='center' sx={{ padding: '5px'}}>
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
      </Box>
    </Container>
  );
};

export default Bloco4Formulario;
