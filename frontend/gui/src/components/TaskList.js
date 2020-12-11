import React, { Component } from 'react'
import axios from 'axios'
class TaskList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             article:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/snippets/task-list')
            .then(response=>{
                this.setState({
                    article:response.data
                })
            console.log(response.data)
            })
    }

    render() {
        return (
            <div>
               <ul>
            {this.state.article.map(art=>(<li key={art.id}>{art.title}</li>))}
               </ul> 
            </div>
        )
    }
}

export default TaskList
