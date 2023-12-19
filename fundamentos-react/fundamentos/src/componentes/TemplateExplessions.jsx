const TemplateExpressions = () => {
    const  nome = "Pedro"
    const pessoa = {
        nome: "Eduardo",
        profissao: "Programador"
    }

    return (
        <div>
           <h1>{console.log("Template Expressions")}</h1>
           <p>Feito por {nome}</p>
           <p>{4 + 8}</p>
           <p>E o {pessoa.nome} trabalha como {pessoa.profissao}</p>
        </div>
    )
}

export default TemplateExpressions;