import React, { Component } from 'react'
import axios from 'axios'

export default class HTTP_GET extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }

    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')

        .then(response => {
            console.log(response)

            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {
        const {posts} = this.state
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
}

//Video 41,42,43 of Codevolution React tutorial [HTTP]