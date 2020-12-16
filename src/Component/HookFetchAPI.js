import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function HookFetchAPI() {

    const [posts, setPosts] = useState([])

    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    return (
        <div>
               List of posts 
               <ul>
               {
                   posts.length ?
                   posts.map(post => <li key={post.id} >{post.title}</li>) :   //here we used ternary operator in line 35,36,37 
                   null
               }
               </ul>
        </div>
    )
}
//React Hook Tutorial [video no.12] of Codevolution React Tutorial [Hooks FetchAPI using useEffect]
