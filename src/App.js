import React from 'react';
import './App.css';
// import Test from './components/labled';
//import CountriesSearchBox from './components/countrysearchbox';
import CountiesTable from './components/countries-table-api';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	searchTerm: ''
		// };
	}

	// shouldComponentUpdate(nextProps, {searchTerm}) {
	// 	return this.state.searchTerm !== searchTerm;
	// }
	//
	// onChangeApp(searchTerm) {
	// 	this.setState({searchTerm});
	// }

	render() {
		return (
			<div className="App">
				<header>

                    <CountiesTable/>
				</header>
			</div>
		);
	}
}



// Create RangeComponent that render 2 Input components.
// the state should have to keys: minValue and maxValue
// RangeComponent Should be stateful component
// if minValue < maxValue the comp should fire an event to the parent comp.
// and the table should show the relevant results.
// once the event is fired with results the table should filter the population range.
