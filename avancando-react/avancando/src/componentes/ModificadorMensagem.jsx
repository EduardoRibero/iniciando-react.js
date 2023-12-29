// rafce para criar novo componente 
const ModificadorMensagem = ({modificaMensagem}) => {
    const mensagens = ["Olá", "Tudo bem?", "Oi"];
  return (
    <div>
        <button onClick={() => modificaMensagem(mensagens[0])}>1</button>
        <button onClick={() => modificaMensagem(mensagens[1])}>2</button>
        <button onClick={() => modificaMensagem(mensagens[2])}>3</button>
    </div>
  )
}

export default ModificadorMensagem