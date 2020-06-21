import React from 'react';
import Input from './input';

export default class Range extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minValue: '',
			maxValue: ''
		};
	}

	shouldComponentUpdate(nextProps, {minValue, maxValue}) {
		return this.state.minValue !== minValue || this.state.maxValue !== maxValue;
	}

	onRangeUpdate(updatedValue) {
		this.setState(updatedValue);
	}

	render() {
		return <div>
			<div>
				min: <Input onChangeExternal={minValue => this.onRangeUpdate({minValue})}/>
			</div>
			<div>
				max: <Input onChangeExternal={maxValue => this.onRangeUpdate({maxValue})}/>
			</div>
		</div>
	}

	componentDidUpdate(prevProps, prevState) {
		const {minValue, maxValue} = this.state;
		if (Number(minValue) < Number(maxValue)) {
			this.props.rangeChanged(Number(minValue), Number(maxValue));
		}
	}
}

