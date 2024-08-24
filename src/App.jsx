import Bloco1 from './components/bloco1';
import Bloco2 from './components/bloco2';
import Bloco3 from './components/bloco3';

import Bloco5Video from './components/bloco5-video';

import { MainContainer, Content } from './style/reusable-components';

function App() {

  return (
    <MainContainer>
      <Content>
        <Bloco1 />
        <Bloco2 />
        <Bloco3 />

        <Bloco5Video />
      </Content>
    </MainContainer>
  )
}

export default App
