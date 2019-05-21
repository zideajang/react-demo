import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/userActions'

class Users extends Component {

    
    componentWillMount(){
     this.props.fetchUsers();
    }
  render() {
      const userItems = this.props.users.map(user => (
          <div key={user.login.uuid}>
              <h3>{user.name.title}</h3>
              <img src={user.picture.thumbnail} />>
          </div>
      ));
    return (
      <div>
        <h1>User</h1>
        <div>{userItems}</div>
      </div>
    )
  }
}

Users.propTypes = {
    fetchUsers:PropTypes.func.isRequired,
    users:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.items
})

export default connect(mapStateToProps,{
    fetchUsers
}) (Users);
