
import City from "./assets/city.jpg"
import './App.css';

function App() {
  return (
    <div className="App">

     <h1>Seção 3;</h1>

     {/*Imagem em public*/}
     <div>
        <img src="./img1.jpg" alt="Paisagem" />
     </div>

     {/*Imagem em assets*/}
    <div>
      <img src={City} alt="Cidade" />
    </div>

    </div>
  );
}

export default App;
