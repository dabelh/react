import React from 'react';

export default function Table({fields, rows}) {
	return (
		<table>
			<thead>
			<tr>
				{fields.map((item, idx) => <th key={idx}>{item}</th>)}
			</tr>
			</thead>
			<tbody>
				{rows.map((item, idx) => <tr key={idx}>

					{Object.values(item).map((currentCell, idx2) =>
						<td key={idx2}>{currentCell}</td>)}

				</tr>)}
			</tbody>
		</table>
	)
}
