import React from 'react';
export default function CountryBox({name,area,population,flag}) {
    
	return (<div>
            <CountriesTable data={name,area,population}/>
    }
    </div>

	)
}
