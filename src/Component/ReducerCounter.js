import React,{useReducer} from 'react'

// const initialState = 0

const initialState ={
    firstCounter : 0,
    secondCounter: 10
}

// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return  initialState
//         default:
//             return state
//     }
// }

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state,firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state,firstCounter : state.firstCounter - action.value}
        case 'increment_2nd':
            return {...state,secondCounter : state.secondCounter + action.value}
        case 'decrement_2nd':
            return {...state,secondCounter : state.secondCounter - action.value}
        case 'reset':
            return  initialState
        default:
            return state
    }
}

function ReducerCounter() {

   const[count,dispatch] = useReducer(reducer,initialState)

    return (
        // <div>
        //     <h3>Count: {count}</h3>
        //     <br></br>
        //     <button onClick={ ()=>dispatch('reset') }>Reset</button>
        //     <button onClick={ ()=>dispatch('decrement') }>Decrement</button>
        //     <button onClick={ ()=>dispatch('increment') }>Increment</button>
        // </div>
        <div>
        <h3> First Count: {count.firstCounter}</h3>
        <br/>
        <h3> Second Count: {count.secondCounter}</h3>
        <br></br>
        <button onClick={ ()=>dispatch({type:'reset'}) }>Reset</button>
        <button onClick={ ()=>dispatch({type:'decrement', value :1}) }>Decrement by 1</button>
        <button onClick={ ()=>dispatch({type:'increment', value :1}) }>Increment by 1</button>
        <button onClick={ ()=>dispatch({type:'decrement', value :5}) }>Decrement by 5</button>
        <button onClick={ ()=>dispatch({type:'increment', value :5}) }>Increment by 5</button>
        <div>
        <button onClick={ ()=>dispatch({type:'decrement_2nd', value :1}) }>Decrement by 1(2nd)</button>
        <button onClick={ ()=>dispatch({type:'increment_2nd', value :1}) }>Increment by 1(2nd)</button>
        </div>
    </div>
    )
}

export default ReducerCounter

//React Hook Tutorial [video no.19,20,21] of Codevolution React Tutorial [Hooks useReducer method]