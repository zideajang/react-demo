import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

export default class Mouse extends Component {
    // static PropTypes = {
    //     render: PropTypes.func.isRequired
    // }

    constructor(props){
        super(props)
        this.handleMouseMove.bind(this);
    }

        state = {
            x:0,
            y:0

        }        

    handleMouseMove = (event) =>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}
