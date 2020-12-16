import React,{useState,useEffect} from 'react'
import useDocumentTitle from './Custom Hooks/useDocumentTitle'

export default function HookCounterTest() {
const initialCount = 0
 const [count, setCount] = useState(initialCount)            


//  useEffect(()=>{
//      document.title = `You Clicked ${count} times`      
//      console.log("Clicked")
//  },[count])       
          
useDocumentTitle(count)

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

//React Hook Tutorial [video no.31,32] of Codevolution React Tutorial [Custom Hooks]