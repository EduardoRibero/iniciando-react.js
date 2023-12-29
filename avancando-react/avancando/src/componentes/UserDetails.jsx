// 'rafce' para criar um novo componente

const UserDetails = ({nome, profissao, online, idade}) => {

  return (
    <div>

        <h1>Desafio Avançando react</h1>
        <p>Nome: {nome}</p>
        <p>Profissão: {profissao}</p>

        {idade >= 18 ? (
            <div> 
               <p>Pode dirigir.</p> 
            </div>
        ) : (

            <div>
                <p>Menor de idade!</p>
            </div>
        )}

    </div>
  )
}

export default UserDetails