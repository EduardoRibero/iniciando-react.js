//'rafce' para criar um novo componente:

const CarDetals = ({brand, km, color}) => {
  return (
    <div>
        <h1>Destructuring em props</h1>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetals