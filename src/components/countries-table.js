import React,{Component} from 'react';
//import Flag from './flag';

export default class CountriesTable extends Component {
    
    constructor(props){
        super(props)
        this.state={
            countries:[],
            data:[],
            fields:[],
            searchValue:''
        }
    }
    searchCountry(searchValue){
        this.setState({searchValue});
        let dataUp = this.state.countries.map(x=>Object.assign({},x));
        let data = dataUp.filter(country=>country.name.startsWith(searchValue));
        this.setState({data})
    }
//    let arr2= arr1.map(x=>Object.assign({},x))
        render() {
            return <div>
            <input type="text"
                onChange={event => {this.searchCountry(event.target.value); console.log(event.target)}}
                value={this.state.searchValue}>
                    </input>
        <table>
            <thead>
            <tr>{this.state.fields.map((item, idx) => <th key={idx}>{item}</th>)}
            </tr>
            </thead>
            <tbody>
                
            {this.state.data.map((item, idx) => {
                return <tr key={idx}>
                    {Object.values(item).map((currentCell, idx2) =>
                        <td key={idx2}>{JSON.stringify(currentCell)}</td>)}
                        </tr>;
                    })}
            </tbody>
        </table>
        </div>
    }
    componentDidMount(){
         fetch(`https://restcountries.eu/rest/v2/all`).then(data =>
            data.json()).then(data => {
             let fields = Object.keys(data[0])
 	          this.setState({data})
             let countries = data;
             this.setState({countries})
            this.setState({fields})

            });;
    } 
    
}

//HomeWork
// Add the following functionality to the CountryTable component
// input type text
// add to the state another field searchValue
// hint: maybe need to add another field to the state (optional)
// {
// data: [], searchValue: ''
// }
// onChange event filter rows from the table the results
// by country name.
// .filter 
// startsWith 
// toLowerCase



