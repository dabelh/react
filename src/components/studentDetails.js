import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from './actions/addStudent';
import {AvgGrade}from './avrageGrade'

//create an action and update redux
class StudentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			firstname: '',
            lastname: '',
            Jgrade:0,
            Ngrade:0
		};
    }

    someClick() {
        const {firstname,lastname,Jgrade,Ngrade} = this.state;
        this.props.addStudentAction({firstname,lastname,Jgrade,Ngrade});
    }

    render() {
        const {firstname,lastname,Jgrade,Ngrade} = this.state;
        return <div>
            First name:<input type="text" value={firstname} onChange={({target: {value: firstname}}) => this.setState({firstname})}/>
            Last name:<input type="text" value={lastname} onChange={({target: {value:lastname}}) => this.setState({lastname})}/>
            JAVA: <input type="number" min="0" value={Jgrade}onChange={({target: {value:Jgrade}}) => this.setState({Jgrade})}/>
            NODE: <input type="number" max="100" value={Ngrade} onChange={({target: {value:Ngrade}}) => this.setState({Ngrade})}/>
            <button onClick={() => this.someClick()}>Add Student!!!!!!</button>

        </div>
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addStudentAction: value => {
            return dispatch(addStudent(value));
        }
    }
}
//create an action

export default connect(null, mapDispatchToProps)(StudentDetails);