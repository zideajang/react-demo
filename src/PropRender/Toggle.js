import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            on:false
        }
    }
  render() {
      
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}
