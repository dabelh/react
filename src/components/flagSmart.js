// Create stateful component called CountryFlag
// state: {url: ''}
// render <img />
// use:
// fetch('https://restcountries.eu/rest/v2/name/israel').then(res => res.json()).then(res => {
// 	console.log(res);
// });;
// In order to fetch the country data and render the flag.
// componentDidMount() lifecycle

import React,{Component} from 'react'

export default class ShowFlag extends Component{
    
    constructor(props){
        super(props)
        this.state={
            url:''
        }
    }
    
    
    
    
    
    	render() {
           return <div>
                <img src={this.state.url}/>
            </div>
        }
    
    componentDidMount(){
         fetch(`https://restcountries.eu/rest/v2/name/${this.props.name}`).then(res => res.json()).then(res => {
             let url = res[0].flag
 	      this.setState({url})
            });;
    }
    
}