//COmponentes:
import FirstComponente from "./componentes/FirstComponente"
import SecondComponente from "./componentes/SecondComponente"
import ThirdComponente from "./componentes/ThirdComponente"
import TemplateExpressions from "./componentes/TemplateExpressions"
import Desafio from "./componentes/Desafio"
import Events from "./componentes/Events"
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstComponente/>
      <hr />
      <SecondComponente/>
      <hr />
      <ThirdComponente/>
      <hr /> 
      <TemplateExpressions/>
      <Events/>
      <hr />
      <Desafio/>
    </div>
  );
}

export default App;
