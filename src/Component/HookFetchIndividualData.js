import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function HookFetchAPI() {

    const [post, setPost] = useState([])
    const [id, setID] = useState(1)

    useEffect( ()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[id])

    return (
        <div>
               <input placeholder="Enter id"  value={id}   onChange={ (e) => setID(e.target.value) }></input>
           <h4 >{post.title}</h4>
        </div>
    )
}

//React Hook Tutorial [video no.13,14] of Codevolution React Tutorial [Hooks Fetch individual data using useEffect]

