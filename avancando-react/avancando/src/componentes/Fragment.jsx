// 'rafce' para criar um novo componente:
const Fragment = (propsFragmet) => {
  return (
    <>
        <h1>Fragment</h1>
        <h2>titulo</h2>
        <p>{propsFragmet.teste} <hr/> {propsFragmet.id}</p>
    </>
  )
}

export default Fragment