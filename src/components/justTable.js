import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { AvgGrade } from './avrageGrade';
import { selectRow } from './actions/avgStud';
function Table(props) {
    
        
   function clickStud(student){
        props.selectStud(student);
        };

	return (
        
        <Fragment>
        
            {
					props.studentsData.length !== 0 && <table>
			<thead>
			<tr>
				{Object.keys(props.studentsData[0]).map((item, idx) => <th key={idx}>{item}</th>)}
			</tr>
			</thead>
			<tbody>
				{props.studentsData.map((item, idx) => <tr key={idx} onClick={ ()=>{clickStud(idx)}}>

					{Object.values(item).map((currentCell, idx2) =>
						<td key={idx2}>{currentCell}</td>)}

				</tr>)}
			</tbody>
		</table>
	

				}
        
		
</Fragment>
)}
const mapStateToProps = (state) => {
    return {
        studentsData: state.student.students,   
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectStud: value => {
            return dispatch(selectRow(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);