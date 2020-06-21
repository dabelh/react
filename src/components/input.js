import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}
	}

	onChangeHandler(value) {
		this.setState({value});
	}

	shouldComponentUpdate(nextProps, {value,minVal,maxVal}) {
		return value !== this.state.value;
	}

	render() {
		const {value} = this.state;
		return (
			<input type="text"
				    value={value}
					onChange={({target: {value}}) => this.onChangeHandler(value)}/>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		const {value} = this.state;
		this.props.onChangeExternal(value);
	}
}



