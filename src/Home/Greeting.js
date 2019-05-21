import React, { Component } from 'react'
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Detail from './Detail';

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

import  {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export default class Greeting extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Home</h1>
          <Nav/>
          <Route render={(location)=>(

            <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
              >
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/shop" exact component={Shop}/>
              <Route path="/shop/:id" component={Detail}/>
            </Switch>
            </CSSTransition>
            </TransitionGroup>
          )}/>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)
