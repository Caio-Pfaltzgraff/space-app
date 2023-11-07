import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import banner from './assets/banner.png'

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <Header />
      <Aside />
      <Banner 
        backgroundImage={banner}
        texto="A galeria mais completa de fotos do espaço!"
      />
    </FundoGradiente>
  )
}

export default App
