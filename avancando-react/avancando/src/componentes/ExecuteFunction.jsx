// 'rafce' para criar um novo componente:


const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <h1>Function props</h1>
        <button onClick={myFunction}>Click execute Function</button>
    </div>
  )
}

export default ExecuteFunction