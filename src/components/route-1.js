import React from 'react';

export default class A extends React.Component {
    	constructor(props) {
		super(props);
		this.state = {
            name:'',
            area:null,
            population:null,
            flag:'',
            found:true
		}
	}
	render() {
        if (this.state.found){
            return <div>
                <h2> name:{this.state.name} </h2>
                <h2> area:{this.state.area} </h2>
                <h2> population:{this.state.population} </h2>
                <div><img src={this.state.flag} width='50px'/></div>
                </div>
        }
        else{
            return <div>
                <h2>אין מדינה כזאת סורי</h2>
		          </div>
            
        }

    }
               
	
    	componentDidMount(){
		fetch(`https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}`)
			.then(response => response.json())
			.then(country => {
				this.setState({name:country[0].name,
                               area:country[0].area,
                               population:country[0].population,
                              flag:country[0].flag})}).catch((error)=>{this.setState({found:false})});
	}
}
 
