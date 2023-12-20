//rafce para criar um componente

import {useState} from "react"

const ListRender = () => {

    const [list] = useState(["Ricardo", "Matheus", "Giovana"])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender