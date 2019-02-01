import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getUsersRequest} from '../actions';

class Container extends Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (<div>
            <h3>List of users</h3>
            {console.log("In Render:", this.props.users)}
        </div>);
    }
}

export default connect(({users}) => ({users}), {getUsers})(Container);
