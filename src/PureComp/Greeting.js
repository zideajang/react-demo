import React, { Component,Fragment } from 'react'

import TutSubtitle from './TutSubtitle'
import TutTitle from './TutTitle'

export default class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:Math.random(),
            subTitle:Math.random()
        }
    }

    componentDidMount(){
        const id = setInterval(() => this.setState({title: Math.random()}),2000);
        setTimeout(()=> clearInterval(id),6000);
        
    }
  render() {
    return (
      <Fragment>
        <TutTitle name={this.state.title}/>
        <TutSubtitle name={this.state.subTitle}/>
      </Fragment>
    )
  }
}
