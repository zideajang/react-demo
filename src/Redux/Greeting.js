import React, { Component } from 'react'
import Posts from '../components/Posts'
import Users from '../components/Users';
import PostFrom from '../components/Postform';

import { Provider } from 'react-redux';


import store from './store'

export default class Greeting extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="container">
                <PostFrom/>
                <hr/>
                <Users/>
            </div>
        </Provider>
    )
  }
}
