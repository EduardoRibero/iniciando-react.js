//COmponentes:

import FirstComponente from "./componentes/FirstComponente"
import SecondComponente from "./componentes/SecondComponente"
import ThirdComponente from "./componentes/ThirdComponente";
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstComponente/>
      <hr />
      <SecondComponente/>
      <hr />
      <ThirdComponente/>
    </div>
  );
}

export default App;
