import React from 'react';

export default function CountryDits(props) {
    
	return (<div>
            <h1>{props.countryObj[0].name}</h1>
            <img src={props.countryObj[0].flag}/>
    </div>

	)
}
