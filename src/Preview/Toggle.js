import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on:false,
    }

    toggle = () => {
        this.setState({
            on:!this.state.on
        })
    }
  render() {
    return (
      <div className={toggleStyle}>
      {
          this.state.on && (
            this.props.children       
          )
      }
        <button onClick={this.toggle}>显示/隐藏</button>
      </div>
    )
  }
}

const toggleStyle = {
    background:"blue"
}
