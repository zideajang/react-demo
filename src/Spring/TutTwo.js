import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';

export default class TutTwo extends Component {
  render() {
    return (
        <Spring
        from={{ opacity:0}}
        to={{opacity:1}}
        config={{delay:1000, duration:1000}}
        >
      { props => (
          <div style={props}>
            <div style={reactStyle}>
              <h1>react</h1>
              <p>React 教程 React 是一个用于构建用户界面的 JAVASCRIPT 库。 React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。 React 起源于 Facebook 的内部项目 .</p>
                <button style={btn} onClick={this.props.toggle}>Toggle</button>
            </div>
            
          </div>
        )
      }
      </Spring>
    )
  }
}

const reactStyle = {
    background:'slateblue',
    color:'white',
    padding:'1.25rem'
}

const btn = {
    background:'#333',
    color:'#fff',
    padding:'1rem 2rem',
    border:'none',
    textTransform:'uppercase',
    margin:'15px 0'
}