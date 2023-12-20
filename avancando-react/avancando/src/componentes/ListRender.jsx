//rafce para criar um componente

import { useState } from "react"

const ListRender = () => {

    //useState
    const [list, setList] = useState([
        {
            name:"Roberto",
            id: 1
        },

        {
            name:"Flavio",
            id: 2
        },

        {
            name:"Giovana",
            id: 3
        }
    ])

    const deleteRandom = () => {
        const numberRandom = Math.floor(Math.random() * 4)

        setList((prevList) => {

            return prevList.filter((list) => numberRandom !== list.id)

        })

    }

  return (
    <div>

        <h1>Propriedade Key</h1>

        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete item list</button>
    </div>
  )
}

export default ListRender