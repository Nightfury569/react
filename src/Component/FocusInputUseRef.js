import React,{useRef, useEffect} from 'react'

function FocusInputUseRef() {

 const inputRef = useRef(null)

 useEffect( ()=>{
     inputRef.current.focus()
 },[])

    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    )
}

export default FocusInputUseRef

//React Hook Tutorial [video no.28] of Codevolution React Tutorial [Hooks useRef ]

