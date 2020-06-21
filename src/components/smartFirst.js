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

	render() {
		return (<div>
			{this.props.label}
			<input onChange={event => this.onChangeF(event)}
				   value={this.state.firstname}/>
        	<input onChange={event => this.onChangeL(event)}
				   value={this.state.lasttname}/>
		</div>)
	}
}



// Create smart component with 2 keys on state
// firstname
// lastname
// the render function should render 2 input text.
// and button

//once the user enter first and last name and click the button
//alert with the first and last name values that saved on the state.