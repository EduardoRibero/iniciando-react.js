//'rafce' para criar um componente

import { useState } from "react"

const ManageData = () => {

    const [number, setNumber] = useState(10)

  return (
    <div>

        <h1>Valor:{number}</h1>

        <button onClick={() => setNumber(15)}>Alterar</button>
        
    </div>
  )

}

export default ManageData