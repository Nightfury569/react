import React,{useState} from 'react'

export default function HookCounter() {
const initialCount = 0
 const [count, setCount] = useState(initialCount)            //To understand this,watch video on Hooks [React Hook Tutorial 2 video of Codevolution React Tutorial]

    return (
        <div>
            <h3>Count: {count}</h3>
            <br></br>
            <button onClick={ ()=>setCount(initialCount) }>Reset</button>
            <button onClick={ ()=>setCount(count+1) }>Increment</button>
            <button onClick={ ()=>setCount(count-1) }>Decrement</button>
        </div>
    )
}

//React Hook Tutorial [video no.1,2,3] of Codevolution React Tutorial [Hooks useState method]