//rafce para criar um componente

import {useState} from "react"

const ListRender = () => {

    const [list] = useState([
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
            id: 4
        }
    ])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender