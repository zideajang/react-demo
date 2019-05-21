import React, { Component } from 'react'
import './Contacts.css'

export default class ContactList extends Component {
  render() {

    const contacts = this.props.contacts;

    return (
      <div className="contacts">
        { contacts.map((user)=>{
            return( 
                <div className="contact__item" key={user.email}>
                    
                    <div className="contact__item__thumb">
                        <img src={user.thumbnail}/>
                    </div>
                    <div className="contact__item_info">
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                </div>
            )
        })}    
      </div>
    )
  }
}
