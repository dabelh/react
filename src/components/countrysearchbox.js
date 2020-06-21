import React, {Fragment} from 'react';
import Input from './input';
import CountryDits from './countrysdits';


export default class CountriesSearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
        searchValue:'',
        countryObj:null
        
		};
	}


    searchCountry(){
        		fetch(`https://restcountries.eu/rest/v2/name/${this.state.searchValue}`)
			.then(response => response.json())
			.then(countryObj => {
				this.setState({countryObj})
			});
    }
	render() {
		return (
			<Fragment>
            <Input onChangeExternal={searchValue=>this.setState({searchValue})}/>
            <button onClick={()=>this.searchCountry()}>search</button>
            {this.state.countryObj && <CountryDits countryObj={this.state.countryObj}/>}
			</Fragment>
		)
	}

	componentDidMount() {

	}
}
