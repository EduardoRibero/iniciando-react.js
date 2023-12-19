const Desafio = () => {
    let a = 10
    let b = 15
    let result = 0

    const soma = () => console.log(a + b)

    return (
        <div>
           <h1>Essas são as variaveis, A:{a}, e B:{b}</h1>
           <button onClick={soma}>Soma</button>
        </div>
    )
}

export default Desafio;