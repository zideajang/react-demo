import React, { Component } from 'react'

export default class TutTitle extends Component {
  render() {
      console.log('rendering tut title ...');
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    )
  }
}
