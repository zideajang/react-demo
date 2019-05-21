import React, { Component } from 'react'
import SliderPos from './SliderPos'
import './Space.css'

export default class Greeting extends Component {
  render() {
    return (
      <div className="App">
      
        <SliderPos className="space">
            {
                position => <h1>{position}</h1>
            }
        </SliderPos>
        <div className="space"></div>
      </div>
    )
  }
}

const spaceStyle = {
    height:"1000px"
}
