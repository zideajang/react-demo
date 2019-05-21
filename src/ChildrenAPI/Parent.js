import React, { Component,Children } from 'react'

export default class Parent extends Component {
  render() {
      const buttons = Children.map(this.props.children, child => (
          <figure className="image is-128x128">
              {child}
              <p>this is a pic</p>
          </figure>
      ))
    return (
      <div>
        <h1>count: {Children.count(this.props.children)}</h1>
        {buttons}
      </div>
    )
  }
}
