import React, {Component}from 'react'

export default class ToDoList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            currentTask:'',
            tasks:[]
        };
    
    }
    addTask({target:{value:currentTask}}){
        this.setState({currentTask})
        
    }
    taskList({tasks}){
        tasks.push(this.state.currentTask)
        this.setState({tasks, currentTask: ''})
    }
    
	render() {
           return <div><div>
            {this.props.label}
            <input id="putin" onChange={event => this.addTask(event)}
                value={this.state.currentTask}></input>
                       <br/>
            <button onClick={event => this.taskList(this.state)}>Add Task</button></div>
                <ul>
                {this.state.tasks.map(function(object, i){
                    return <li key={i}>{object}</li>;
                })}
                </ul>
                </div>
}
    	

    
}