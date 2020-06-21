import React from 'react';

export default function Student({name,grade}) {
	return (
        <div> 
        <span>{name}</span>
        <span>{grade}</span>
        </div>
	);
}
