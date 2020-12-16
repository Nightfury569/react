import React,{useState} from 'react'

export default function HookSetName() {

    const [name, setName] = useState( { firstName:"",  lastName:"" } )

    return (
        <div>
            <input 
            value={name.firstName}
            onChange={ (e)=>setName({ ...name, firstName:e.target.value}) }   //...name means keep the name same just update the firstName, or else the lastName will disappear if we don't use ...name, this is called Spread Operator
            placeholder="First Name"
            ></input>

            <input 
            value={name.lastName}
            onChange={ (e)=>setName({ ...name, lastName:e.target.value}) }
            placeholder="Last Name"
            ></input>

    <h3>First Name: {name.firstName}, Last Name: {name.lastName}</h3>
        </div>
    )
}

//React Hook Tutorial [video no.4] of Codevolution React Tutorial [Hooks useState method with object]
