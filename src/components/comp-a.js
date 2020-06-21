import React from 'react';
import { connect } from 'react-redux';
import { updateSomething } from './actions/index';

//create an action and update redux
class CompA extends React.Component {
    constructor(props) {
        super(props);
    }

    someClick() {
        this.props.createMyFirstAction('ofer');
    }

    render() {
        return <div>
            <button onClick={() => this.someClick()}>create some action</button>
        </div>
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        createMyFirstAction: value => {
            return dispatch(updateSomething(value));
        }
    }
}
//create an action

export default connect(null, mapDispatchToProps)(CompA);