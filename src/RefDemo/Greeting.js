import React, { Component } from 'react'

export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput(){
        this.textInput.current.focus();
    }
  render() {
    return (
      <div>
        <input
            className="input"
            type="text"
            ref={this.textInput}/>
            <input 
                className="button"
                type="button"
                onClick={this.focusTextInput}/>
      </div>
    )
  }
}
