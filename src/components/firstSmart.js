import React, {Component} from 'react';

export default class StatefulExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
            lastname: ''
		};
	}

	//custom
	onChangeF({target: {value: firstname}}) {
		this.setState({firstname});
	}
    onChangeL({target: {value: lastname}}) {
		this.setState({lastname});
	}
    popFunc({firstname,lastname}){
        alert(firstname +' '+ lastname)
    }

	render() {
		return (<div>
			{this.props.label}
			first name: <input onChange={event => this.onChangeF(event)}
				   value={this.state.firstname}/>
                       <br/>
        	last name: <input onChange={event => this.onChangeL(event)}
				   value={this.state.lastname}/>
            <button onClick={event => this.popFunc(this.state)}>Go</button></div>
        )
}
}