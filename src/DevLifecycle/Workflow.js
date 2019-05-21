import React, { Component } from 'react'

export default class Workflow extends Component {
  //
  constructor(){
    super();
    this.state = {
      pageTitle:""
    };
    console.log("constructor")
  }
  //
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
  }

  //
  componentDidMount(){
    console.log("componentDidMount")
  }

  //
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return true;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  handleKeyUp = e => {
    this.setState({inputDetails:e.target.value})
  }
  handleClick = () =>{
    console.log("button clicked")
    this.setState({pageTitle:"workflow"})
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>工作流</h1>
        <input className="input" type="text" onKeyUp={e => this.handleKeyUp(e)}/>
        <hr/>
        <button className="button" onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}
