import './App.css';
import BotaoEntrada from './componentes/BotaoEntrada';
import MyComponent from './componentes/MyComponent';

function App() {
  return (
    <div className="App">
        <h1>React com CSS</h1>
        <BotaoEntrada/>
        <button>
            ""CLICK AQUI 2 !""
        </button>
        <MyComponent/>
        <p>Paragrafo NÃO personalizado</p>
    </div>
  );
}

export default App;
