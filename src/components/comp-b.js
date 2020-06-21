import React from 'react';
import { connect } from 'react-redux';

//will listen to changes on redux store and get an update
class CompB extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div>
            <h1>{this.props.myFirstData.data}</h1>
        </div>
    }
}

// redux state
const mapStateToProps = (state) => {
    return {
        myFirstData: state.student
    }
} // listen to update

export default connect(mapStateToProps, null)(CompB);