import React, { Component, PropTypes } from 'react'
import AppContacts from './AppContacts';
import './Contacts.css'
export default class Greeting extends Component {
    state = { contacts : [] }

    componentDidMount() {
        fetch('https://api.randomuser.me/?nat=ch&results=1000')
            .then(response => response.json())
            .then(parsedResponse => parsedResponse.results.map(user => (
                {
                    name:`${user.name.first}`,
                    email:user.email,
                    thumbnail:user.picture.thumbnail
                }
            )))
            .then(contacts => this.setState({contacts}))
    }
  render() {
    return (
      <div className="wrapper">
        <AppContacts contacts={this.state.contacts}/>
      </div>
    )
  }
}


