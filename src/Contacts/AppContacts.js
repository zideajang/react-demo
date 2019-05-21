import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar';
import ContactList from './ContactList';

import LoaderHOC from './LoaderHOC'

 class AppContacts extends Component {

    state = {
        filterText:''
    }

    static propTypes = {
        contacts : PropTypes.arrayOf(
            PropTypes.shape({
                thumbnail:PropTypes.string.isRequred,
                name:PropTypes.string.isRequred,
                email:PropTypes.string
            })
        ).isRequired,
        loadTime:PropTypes.string,
    }
    handleUserInput = (searchTerm) => {
        this.setState({filterText:searchTerm})
    }
  render() {
        const contacts = this.props.contacts;
    return (
      <div>
        <ContactList contacts={contacts}/>
        <p>加载时间:{this.props.loadTime}</p>
      </div>
    )
  }
}

export default LoaderHOC('contacts')(AppContacts)