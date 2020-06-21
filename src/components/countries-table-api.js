import React, {Fragment} from 'react';
import Table from './table';
import Input from './input';
import RangeComponent from './rangecomp';

export default class CountiesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			fields: ['name', 'population', 'flag', 'area'],
			searchTerm: '',
			minValuePop: null,
			maxValuePop: null,
            minValueArea: null,
			maxValueArea: null,
            sortBy:{
                kind:null,
                bool:false
            }
		};
        
	}

	shouldComponentUpdate(nextProps, {countries, fields, searchTerm, minValuePop, maxValuePop,minValueArea,maxValueArea}) {
		return this.state.countries.length !== countries.length ||
			this.state.fields.length !== fields.length ||
			this.state.searchTerm !== searchTerm ||
			this.state.minValuePop !== minValuePop ||
			this.state.maxValuePop !== maxValuePop||
            this.state.minValueArea !== minValueArea ||
			this.state.maxValueArea !== maxValueArea;
	}

	renderTable() {
		const {searchTerm, countries, fields, minValuePop, maxValuePop,minValueArea,maxValueArea,sortBy} = this.state;
		const filterBy = ({name}) => name.toLowerCase().startsWith(searchTerm);
		const filterByRange = ({population}) => population >= minValuePop && population <= maxValuePop;
        const filterByRangeArea = ({area}) => area >= minValueArea && area <= maxValueArea;
		let filteredCountries = countries.filter(filterBy);
		if (minValuePop !==null && maxValuePop!==null) {
			filteredCountries = filteredCountries.filter(filterByRange);
		}
        if (minValueArea !==null && maxValueArea !==null) {
			filteredCountries = filteredCountries.filter(filterByRangeArea);
		}
//        console.log('sortBy.kind');
        if(sortBy.kind!==null){
        filteredCountries = filteredCountries.sort(function(country1, country2) {
            var val1 = country1[sortBy.kind];
            var val2 = country2[sortBy.kind];
            if (sortBy.bool) {
                if (val1 > val2) {
                    return 1;
                }
                if (val1 < val2) {
                    return -1;
                }
                return 0;
            }
            if (!sortBy.bool) {
                if (val1 < val2) {
                    return 1;
                }
                if (val1 > val2) {
                    return -1;
                }
                return 0;
            }
            return 0

        });


        }
          
        let filteredCountriesRel = filteredCountries.map(country =>{
            var obj = {};
            for(var field of this.state.fields){
                if(field==='flag'){
                    obj[field] = `<img src=`+country[field]+`/>`
                }
                else{
                    obj[field] = country[field];
                }  
            }
            return obj
        })
  

        return <Table fields={fields} rows={filteredCountriesRel} clickSort={target=>this.clickSort(target)} />
	}

	onSearch(searchTerm){
		this.setState({searchTerm});
	}

	updatePopRange(minValuePop, maxValuePop) {
		this.setState({minValuePop, maxValuePop});
	}
    updateAreaRange(minValueArea, maxValueArea) {
		this.setState({minValueArea, maxValueArea});
	}
    clickSort({target:{innerText:topic}}){
        if(topic!=='flag'){
            var sortBy={
                kind:topic,
                bool: this.state.sortBy.kind===topic ? !this.state.sortBy.bool : true
            }
            this.setState({sortBy})
            console.log(this.state.sortBy)
        }
    }

	render() {
		return (
			<Fragment>
				<div style={{padding: '50px'}}>
					Search:<Input onChangeExternal={value => this.onSearch(value)}/>
				</div>
				<div style={{padding: '50px'}}>
					Population Range:
					<RangeComponent rangeChanged={(minValuePop, maxValuePop) => this.updatePopRange(minValuePop, maxValuePop)}/>
                        <br/>
                    Area range:
                    <RangeComponent rangeChanged={(minValueArea, maxValueArea) => this.updateAreaRange(minValueArea, maxValueArea)}/>
				</div>
				{
					this.state.countries.length !== 0 && this.renderTable()
				}
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
//1. show only the following fields without changing the table component.
// name, population, flag, area,
//2. Use the Range component to add filter by area
//3. *** (you need to change the table component)
// once th is clicked you should sort the table by the field that clicked.
// add onSortClicked function to props.
// add some fields to state to handle the sort (CountriesTable) change(add) to the state
// first click asc second click desc

