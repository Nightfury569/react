import React,{useState} from 'react'
import HookMouse from './HookMouse'

export default function MouseContainer() {

    const [display, setDisplay] = useState(true)
    
    
    return (
        <div>
            <button onClick={()=> { setDisplay(!display) }}>  <span>{display? 'Remove Display':'Show Display'}</span> </button>
            {display && <HookMouse/>}
        </div>
    )
}

//React Hook Tutorial [video no.10] of Codevolution React Tutorial [Hooks useeffect with cleanUp]

