import React,{useState,useEffect} from 'react'
import axios from 'axios'

function HookFetchData_and_Error() {
 
    const [loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const[post, setPosts] = useState({})

    useEffect( ()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')

        .then(response => {
            console.log(response)
            setLoading(false)
            setPosts(response.data)
            setError('')
        })
        .catch(error =>{
            console.log(error)
            setLoading(false)
            setPosts({})
            setError('Something went wrong')
        })
    },[])
    

    return (
        <div>
            {loading ? "Loading" : post.title}
            {error ? error : null}
        </div>
    )
}

export default HookFetchData_and_Error
