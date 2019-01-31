import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions';

class Container extends Component {

    componentDidMount() {
        console.log("Arash getUsers:", getUsers);
        this.props.getUsers()
        console.log("Arash users:", this.props.users);
    }
    render() {
        return (<div>
            {console.log("In Render:", this.props.users)}
        </div>);
    }
}

export default connect(({users}) => ({users}), {getUsers})(Container);
