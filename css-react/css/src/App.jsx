import './App.css';
import BotaoEntrada from './componentes/BotaoEntrada';
import MyComponent from './componentes/MyComponent';

function App() {
  return (
    <div className="App">

       {/*CSS global*/}
        <h1>React com CSS</h1>

        {/*CSS Componente*/}
        <BotaoEntrada/>

        <button>
            ""CLICK AQUI 2 !""
        </button>

        <MyComponent/>

        <p>Paragrafo NÃO personalizado</p>

        {/*CSS inline*/}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Paragrafo do css inline</p>

    </div>
  );
}

export default App;
