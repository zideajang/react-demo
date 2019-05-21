import React, { Component } from 'react'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
    }

    onChange(editorState){
        this.setState({editorState})
    }
    makeBold(){
      this.onChange(RichUtils.toggleInlineStyle(
        this.state.editorState,
        'BOLD'
      ))
    }
  render() {
    const raw = convertToRaw(this.state.editorState.getCurrentContent());
    return (
      <div>
      <button 
        onClick={()=> {this.makeBold();}}
        className="button">加粗</button>
      <h1>富文本编辑器</h1>
      <hr/>
        <Editor 
            placeHolder="this is rich the editor"
            editorState={this.state.editorState} 
            onChange={(editorState)=>{this.onChange(editorState)}} />
      <div>{JSON.stringify(raw)}</div>
      </div>
    )
  }
}
