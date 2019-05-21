import React, { Component } from 'react'
import {Editor, EditorState} from 'draft-js'

import {BrowserRouter,Route,Link} from 'react-router-dom'
import PageContent from './PageContent';
import Navigation from './Navigation';

export default class Greeting extends Component {
    
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <h1>React 生命周期</h1>
        <Navigation/>
        <PageContent/>
      </div>
      </BrowserRouter>
    )
  }
}
