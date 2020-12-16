import React,{useState,useEffect} from 'react'

export default function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) =>{
      console.log("Mouse Moved")
      setX(e.clientX)
      setY(e.clientY)
  }

  useEffect( () =>{
      console.log("Use Effect")
      window.addEventListener('mousemove', logMousePosition)

      return () =>{
          console.log("Unmounted")
          window.removeEventListener('mousemove', logMousePosition)
      }
  }, [] )

    return (
        <div>
            Co-ordinates of mouse pointer : X: {x} , Y:{y}
        </div>
    )
}

//React Hook Tutorial [video no.9,10] of Codevolution React Tutorial [Hooks useEffect only once , useeffect with cleanUp]
