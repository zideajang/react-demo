import React, { PureComponent } from 'react'

export default class TutSubtitle extends PureComponent {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
         return nextProps.name !== this.props.name;
    }
  render() {
      console.log('rendering sub tittle...')
    return (
        <div>
        <span>{this.props.name}</span>
      </div>
    )
  }
}
