import React, { Component } from 'react'

export default class Discussion extends Component {
  constructor(){
    super();

    this.state = {
      pageTitle:"Discussion",
      currentTime: String(new Date())
    }
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentDidMount(){
    console.log("mounted component");
    this.id = setInterval(()=> {
      console.log("new chat message")
      this.setState({currentTime: String(new Date())})
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.id);
  }

  render() {
    const {pageTitle, currentTime} = this.state;
    return (
      <div>
        <h1 className="title">{pageTitle}</h1>
        <h2 className="subtitle">{currentTime}</h2>
      </div>
    )
  }
}
