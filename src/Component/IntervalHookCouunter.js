import React,{useState,useEffect} from 'react'

export default function IntervalHookCouunter() {

    const [count, setCount] = useState(0)

    const tick = ()=> {setCount(prevCount => prevCount + 1)}

    useEffect(()=>{
        const interval = setInterval(tick,1000)

        return () =>{
            clearInterval(interval)
        }

    },[])
    
    return (
        <div>
            <h3>{count}</h3>
        </div>
    )
}

//React Hook Tutorial [video no.11] of Codevolution React Tutorial [Hooks useeffect with incorrect Dependency]

