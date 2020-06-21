import React from 'react';
import Student from './student';

export default function StudentList({students}) {
	return (<div>
		{students.map(({name, grade}, idx) => <Student key={idx}
												 name={name}
												 grade={grade}/>)}
	</div>);

}
