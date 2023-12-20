// 'rafce' para criar um componente

import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("fredo")
  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora o x é falso!</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João.</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Click aqui</button>
    </div>
  )
}

export default ConditionalRender