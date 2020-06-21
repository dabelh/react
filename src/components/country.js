import React from 'react';

export default class Country extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: null,
			networkError: false,
		}
	}

	render() {
		const {networkError, country} = this.state;
		return <div>
			{networkError && <div>Country Not Found 404</div>}
			{country && <div>
				<div>name: {country.name}</div>
				<div>population: {country.population}</div>
				<div>area: {country.area}</div>
				<div><img src={country.flag} width="50px"/></div>
			</div>}
		</div>
	}

	componentDidMount() {
		const {match: {params: {countryName}}} = this.props;
		fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
			.then(response => response.json())
			.then(([country]) => {
				this.setState({country});
			}).catch(() => {
				this.setState({networkError: true});
		});
	}
}
