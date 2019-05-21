import React, { Component } from 'react';
import init from './init';

export default class WebGL extends Component {

    componentDidMount(){
        init('webgl');
    }
  render() {
    return (
        <canvas id="webgl" width="400" height="400" 
            style={canvasStyle}></canvas>
    )
  }
}

const canvasStyle = {
    border:'1px solid steelblue'
}
