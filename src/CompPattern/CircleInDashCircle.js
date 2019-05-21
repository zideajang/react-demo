import React, { Component } from 'react'
import SmallCircle from './SmallCircle';

export default class CircleInDashCircle extends Component {
    constructor(){
        super();
        this.state = {smarts:'smarts'}
    }
  render() {
    return this.props.dashedCirle(this.state)
    
  }
}

const SmallCircleInDashCircl = <CircleInDashCircle
    dashedCirle={state=>(
        <SmallCircle{...state}/>
    )}
/>