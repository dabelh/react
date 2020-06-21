import React from 'react';

export default function Countries({data}) {

	return (<div>
        for(let i = 0; i<data.length;i++){
        <countryBox country={data[i]}/>
    }
    </div>

	)
}
