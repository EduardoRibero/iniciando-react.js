//Componentes:
import ManageData from "./componentes/ManageData";


import City from "./assets/city.jpg";
import './App.css';
import ListRender from "./componentes/ListRender";
import ConditionalRender from "./componentes/ConditionalRender";

function App() {
  return (
    <div className="App">

     <h1>Seção 3;</h1>

     {/*Imagem em public*/}
     <div>
        <img src="./img1.jpg" alt="Paisagem" />
     </div>

     {/*Imagem em assets*/}
    <div >
      <img src={City} alt="Cidade" />
    </div>

    {/*useState na prática*/}
    <div>
      <ManageData/>
    </div>

    {/*Propriedade Key*/}
    <div>
      <ListRender/>
    </div>

    {/*Renderização condicional*/}
    <div>
    <ConditionalRender/>
    </div>
    </div>
  );
}

export default App;
