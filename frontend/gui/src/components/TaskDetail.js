
import React, { Component } from 'react'
import axios from 'axios'

class TaskDetail extends Component {
    state = {
        article:{}
    }

    componentDidMount(){
        const artID = this.props.match.params.artID
        axios.get(`http://127.0.0.1:8000/snippets/task-detail/${artID}`)
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
                
            </div>
        )
    }
}

export default TaskDetail
