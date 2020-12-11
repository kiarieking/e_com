import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export class TaskCreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             completed:false
        }
    }
    
    changeHandler= (e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        })
        
    }

    checkHandler = (e)=>{
        const {checked} = e.target
        this.setState({
            completed:checked
        })
    }
    
    submitHandler = (e)=>{
        e.preventDefault()
        // alert(this.state.title)
        // console.log(this.state.completed)
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/snippets/task-create/',
            data: this.state
          });
    }

    render() {
        const {title,completed} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>title</label>
                    <input type='text' name='title' value={title} onChange={this.changeHandler}/>
                    <label>completed</label>
                    <input type='checkbox' name='completed' value={completed}
                     checked={this.state.completed} onChange={this.checkHandler}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default TaskCreate
