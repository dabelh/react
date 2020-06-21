import React from 'react';
import MyChart from './chartComp'
export default class Chart extends React.Component {
    	constructor(props) {
		super(props);
		this.state = {
            country:{
                name:'',
                data:[]
                    },
            found:true
		}
	}
	render() {
        console.log(this.state.country)
        return <div>
            <div>A</div>
        
       { this.state.country.name && <div>
                <div>A</div>
                <MyChart a={this.state.country}/>
                </div>
       }
    
        
        {!this.state.country.name && <div>
                <h2>אין מדינה כזאת סורי</h2>
		          </div>
            
        }
        </div>

    }
    

               
	
    	componentDidMount(){
		fetch(`https://api.covid19api.com/total/country/${this.props.match.params.countryName}`)
			.then(response => response.json())
			.then(response => {
            console.log(response[0].Country)
                let name = response[0].Country;
                let data = response.map(({Confirmed})=>{
                        return Confirmed
                });
				this.setState({
                    country: {
                        name:name,
                        data:data
                    }
                })
	       }).catch((error)=>{
                    this.setState({found:false});
            });;
        }   
}
 