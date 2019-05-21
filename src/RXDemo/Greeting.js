import React, { Component } from 'react'

import { streamProps } from "react-streams"
import { delay, startWith } from 'rxjs/operators'
// import DemoB from './DemoB'

const HelloWorld = streamProps(
    delay(3000),
    startWith({greeting:"Wait..."})
)

export default class Greeting extends Component {
    
  render() {
    return (
      <div>
        <HelloWorld greeting="hello">
            {
                props => (
                <h1 className="title">{props.greeting}</h1>
                )
            }
        </HelloWorld>
      </div>
    )
  }
}
