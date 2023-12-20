//'rafce' para criar um componente

import { useState } from "react"

const ManageData = () => {
    
    //useStates
    const [number, setNumber] = useState(10)

  return (
    <div>
      
        <h1>useState na prática</h1>

        <h2>Valor:{number}</h2>

        <button onClick={() => setNumber(15)}>Alterar</button>

    </div>
  )

}

export default ManageData