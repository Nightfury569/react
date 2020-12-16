import React,{useState} from 'react'


export default function HookWithArray() {

    const [items, setItems] = useState([])

    const addItem = () =>{
        setItems(
           [ ...items, 
             {id: items.length,
             value: Math.floor(Math.random() * 10) }
           ]
        )
    }

    return (
        <div>
            <button onClick={addItem}>Add items</button>
            <ul>
                {
                    items.map( item => (
                    <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

//React Hook Tutorial [video no.5] of Codevolution React Tutorial [Hooks useState method with array]
