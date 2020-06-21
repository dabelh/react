import React from 'react';
import Input from './input';

export default class B extends React.Component {
    	constructor(props) {
		super(props);
		this.state = {
            name:'hadar',
            message:'',
            messages:[]
		}
	}

	render() {
        console.log(this.state.messages)
        const currentChat =this.state.messages
        return <div>
            <h2>Chat</h2>
            <Input onChangeExternal={value=>this.updateMessage(value)}/>
            <button onClick={()=>this.sendFunc()}>GO</button>
			<ul>
				{currentChat.map(({sender,message}, idx) =>
						<li key={idx}>{sender}  :  {message}</li>)}

				</ul>
            </div>
            
    }
    updateMessage(value){
        this.setState({message:value})
        
    }
    sendFunc(){
            fetch('http://johnbryce-ofer.ngrok.io/addMessage',{
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify({message:this.state.message, sender: this.state.name})
				}).then(response => response.json()).then(data => {
            console.log('Success:', data);
        })
    }
    
               
	fetchData(){
       		fetch(`http://johnbryce-ofer.ngrok.io/getMessages`)
			.then(response => response.json())
			.then(({messages}) => {
				this.setState({messages});

        }); 
    }
    	componentDidMount(){
		  var updateMessages = setInterval(()=> {
                    this.fetchData();

        }, 2000);
	}
}