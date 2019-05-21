import React, { Component } from 'react'
import Mouse from './Mouse';
export default class Greeting extends Component {

  render() {
    return (
      <div>
        <Mouse render={
            ({x,y})=>(
               <h1>The mouse position is ({x},{y})</h1>
            )
        }/>
      </div>
    )
  }
}
