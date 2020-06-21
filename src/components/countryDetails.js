import React, {Fragment} from 'react';
import Table from './table';
import Input from './input';

export default class CountryDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			fields: ['name', 'population', 'flag', 'area'],

		};
        
	}

	renderTable() {
		const {countries, fields} = this.state;
        return <Table fields={fields} rows={countries} />
	}




	render() {
		return (
			<Fragment>
				{this.state.countries.length !== 0 && this.renderTable()}
			</Fragment>
		)
	}

	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(countries => {
				this.setState({countries});
			});
	}
}