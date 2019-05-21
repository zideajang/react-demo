import React, { Component } from 'react'

export default class DashCircle extends Component {
  constructor(){
      super();
      this.state = { smarts:'smarts'}
  }
    render() {
    return this.props.dashedCircle(this.state)
  }
}
