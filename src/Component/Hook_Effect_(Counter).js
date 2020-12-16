import React,{useState,useEffect} from 'react'

export default function Hook_Effect_Counter() {
const initialCount = 0
 const [count, setCount] = useState(initialCount)            //To understand this,watch video on Hooks [React Hook Tutorial 2 video of Codevolution React Tutorial]
 const [name, setName] = useState("")


 useEffect(()=>{
     document.title = `You Clicked ${count} times`      // We are changing the title name of the App, and the title will be changed depending upon count
     console.log("Clicked")
 },[count])                    // [count] means useEffect will only occur while changing the count, not changing the name

    return (
        <div>
            <h3>Count: {count}</h3>
            <br></br>

            <input type="text" value={name} 
            onChange={ (e)=> setName(e.target.value) }  
            placeholder="Name"></input>

            <button onClick={ ()=>setCount(initialCount) }>Reset</button>
            <button onClick={ ()=>setCount(count+1) }>Increment</button>
            <button onClick={ ()=>setCount(count-1) }>Decrement</button>
        </div>
    )
}

//React Hook Tutorial [video no.7,8] of Codevolution React Tutorial [Hooks useEffect after render, useEffect conditionally run]