// 'rafce' para criar um componente
 
const ShowUserName = (props) => {
  return (
    <div>
        <h1>Avançando no React</h1>
        <p>O nome é : {props.name}, a altura dele é: {props.altura}, e ele tem só {props.idade} anos</p>
    </div>
  )
}

export default ShowUserName