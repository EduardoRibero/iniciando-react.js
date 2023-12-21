//Componentes:
import ManageData from "./componentes/ManageData";
import City from "./assets/city.jpg";
import './App.css';
import ListRender from "./componentes/ListRender";
import ConditionalRender from "./componentes/ConditionalRender";
import ShowUserName from "./componentes/ShowUserName";
import { useState } from "react";
import CarDetals from "./componentes/CarDetals";
import Fragment from "./componentes/Fragment";
import Container from "./componentes/Container";

function App() {
  const veiculos = [
    {brand:"prisma", km: 32.000, color: "vermelho"},
    {brand:"uno", km: 92.000, color: "branco"},
    {brand:"corsa", km: 72.000, color: "preto"}
  ]

  const name = "tiago"
  const [altura] = useState("1.67")

  return (
    <div className="App">

     <h1>Seção 3;</h1>

     {/*Imagem em public*/}
     <div>
      <h1>Imagem em public</h1>
        <img src="./img1.jpg" alt="Paisagem" />
     </div>

     {/*Imagem em assets*/}
    <div >
      <h1>Imagem em assets</h1>
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

    {/*Props*/}
    <div>
      <ShowUserName name={name} idade="22" altura={altura}/>
    </div>

    {/*Destructuring em props*/}
    <div>
    <CarDetals brand="BMW" km={10.000} color="blue"/>
    </div>

    {/*Renderização de listas em componentes*/}
    <div>
    {veiculos.map((veiculo) =>(
      <CarDetals brand={veiculo.brand} km={veiculo.km} color={veiculo.color}/>
    ))}
    </div>

    {/*Fragments*/}
    <div>
      <Fragment teste="teste"/>
    </div>

      {/*Children prop*/}
      <div>
        <Container>
          <p>Algura coisa</p>
        </Container>
      </div>


    </div>
  );
}

export default App;
