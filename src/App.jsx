import Bloco1 from './components/bloco1';
import Bloco2 from './components/bloco2';
import Bloco3 from './components/bloco3';
import Bloco4Formulario from './components/bloco4-formulario';
import Bloco5Video from './components/bloco5-video';
import Bloco6 from './components/bloco6';
import Footer from './components/footer';

import { MainContainer, Content } from './style/reusable-components';

function App() {

  return (
    <MainContainer>
      <Content>
        <Bloco1 />
        <Bloco2 />
        <Bloco3 />
        <Bloco4Formulario />
        <Bloco5Video />
        <Bloco6 />
        <Footer />
      </Content>
    </MainContainer>
  )
}

export default App;
