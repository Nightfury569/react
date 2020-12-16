import React,{useContext} from 'react'
import {UserContext, AgeContext} from './HookContext'
export default function ComponentB() {

    const user = useContext(UserContext)
    const Age =  useContext(AgeContext)
    
    return (
        <div>
            {user} - {Age}
        </div>
    )
}

//React Hook Tutorial [video no.17] of Codevolution React Tutorial [Hooks useContext]

