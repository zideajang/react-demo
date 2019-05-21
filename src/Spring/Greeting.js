import React, { Component } from 'react'
import TutOne from './TutOne';
import TutTwo from './TutTwo';
import TutThree from './TutThree';

import {Transition } from 'react-spring/renderprops';
import {animated} from 'react-spring';

export default class Greeting extends Component {

    state  ={
        showTutThree:false
    }

    toggle = e => this.setState({showTutThree:!this.state.showTutThree})

  render() {
    return (
      <div>
        <TutOne/>
        <TutTwo toggle={this.toggle}/>
        <Transition
            native
            items={this.state.showTutThree}
            from={{ opacity: 0}}
            enter={{ opacity: 1}}
            leave={{ opacity: 0}}
            >
            {show=>show && (props=>(
                <animated.div style={props}>
                    <TutThree/>
                </animated.div>
            ))}
        </Transition>
      </div>
    )
  }
}
