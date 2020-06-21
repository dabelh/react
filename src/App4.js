import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import A from './components/route-1';
import B from './components/route-2';
import CountryDetails from './components/countryDetails';
import Chart from './components/coronaChart';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
                    <Route path="/coronaChart/:countryName" component={Chart}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
//create Country (stateful)
// on render show the flag with width 100px
// show the country name, population and area
// <div>
// <h2> name </h2>
// <h2> area </h2>
// <h2> population </h2>
// <div> <img /> </div>
// </div>
// the comp should fetch her own data


// create spa with one route:
// http://localhost:3000/country/israel
// route -> /country/:countryName
