import React, { useState } from 'react'

function DidMount() {

    const [items, setitems] = useState([])

    const addItme = () => {
        setitems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    
    return (
        <div>
            <button  onClick={addItme}   >Add Item </button>
            <ul>
                {items.map((item)=>(

                    <li key={item.id} >{item.value}</li>
                )
                )}
                </ul>    
        </div>
    )
}

export default DidMount
