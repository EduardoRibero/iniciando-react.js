//COmponentes:
import FirstComponente from "./componentes/FirstComponente"
import SecondComponente from "./componentes/SecondComponente"
import ThirdComponente from "./componentes/ThirdComponente"
import TemplateExpressions from "./componentes/TemplateExplessions"
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
    </div>
  );
}

export default App;
