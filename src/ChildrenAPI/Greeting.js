import React, { Component } from 'react'

import SlideShow from './SlideShow';

export default class Greeting extends Component {
  render() {
    return (
      <div className="container">
        <SlideShow>
            <img src="http://placekitten.com/300/200" />
            <img src="http://placekitten.com/300/201" />
            <img src="http://placekitten.com/300/202" />
        </SlideShow>
      </div>
    )
  }
}
