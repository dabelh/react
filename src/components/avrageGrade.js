import React, {Fragment} from 'react';
import { connect } from 'react-redux';

class AvgGrade extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        debugger;
        console.log(this.props.selectedStud)
        return(
        <Fragment>
        <div>maasdfsdfa</div>
            {this.props.selectedStud &&  <div>{this.props.students[this.props.selectedStud].firstname}</div>
            }
        </Fragment>
        )
    }
}

// redux state
const mapStateToProps = (state) => {

    return {
        selectedStud:state.student.selected,
        students:state.student.students
    }
} // listen to update

export default connect(mapStateToProps, null)(AvgGrade);