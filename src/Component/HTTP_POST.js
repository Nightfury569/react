import React, { Component } from 'react'
import axios from 'axios'

export default class HTTP_POST extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')

    //     .then(response => {
    //         console.log(response)

    //         this.setState({posts:response.data})
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }

    changeHandler = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }
    
    submitHandler= (e) =>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts')

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
                <form onSubmit={this.submitHandler}>
                    <label style={{position:"relative",right:10 , top:2}}  >User ID</label>
                    <input  onChange={this.changeHandler}></input>
                    <br/>
                    <label style={{position:"relative",right:10 , top:2}}>Title</label>
                    <input style={{position:"relative",left:12}} onChange={this.changeHandler}></input>
                    <br/>
                    <label style={{position:"relative",right:10 , top:2}}>Body</label>
                    <input style={{position:"relative",left:10}}  onChange={this.changeHandler}></input>
                    <br/>
                   <button type="submit">Submit</button>
                </form>
                <br/>
               {/* List of posts 
               <ul>
               {
                   posts.length ?
                   posts.map(post => <li key={post.id} >{post.title}</li>) :   //here we used ternary operator in line 35,36,37 
                   null
               }
               </ul> */}
            </div>
        )
    }
}

//Video 41,42,43 of Codevolution React tutorial [HTTP]