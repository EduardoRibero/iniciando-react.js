// 'rafce' para criar um novo componente

const Container = ({children}) => {
  return (
    <div>
        <h1>Children prop</h1>
        {children}
    </div>

  )
}

export default Container