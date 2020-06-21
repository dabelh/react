import React,{Fragment} from 'react';
import Input from './input';

export default class RangeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            minVal:'',
            maxVal:''
		}
	}

	onRangeMin(minVal) {
		this.setState({minVal})
	}
    
    onRangeMax(maxVal) {
		this.setState({maxVal})
	}
    

	shouldComponentUpdate(nextProps, {minVal,maxVal}) {
		return this.state.minVal !== minVal || this.state.maxVal !== maxVal;
	}

	render() {

		return (
            <Fragment>
                min:<Input onChangeExternal={value => this.onRangeMin(value)}/>
                max:<Input onChangeExternal={value => this.onRangeMax(value)}/>
            </Fragment>
		);
	}

	componentDidUpdate(prevProps, prevState) {
        const {minVal,maxVal} = this.state;
		if(Number(maxVal)>Number(minVal)){
           this.props.rangeChanged(Number(minVal),Number(maxVal))
    }
	}
}
