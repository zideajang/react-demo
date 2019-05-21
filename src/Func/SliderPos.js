import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SliderPos extends Component {
    
    static propTypes = {
        children: PropTypes.func.isRequired
    }

    state = {
        position:null
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll = (event) =>{
        const scrollTop = event.srcElement.body.scrollTop;
        console.log(scrollTop);
        this.setState({
            position:scrollTop
        })
    }

  render() {
    return (
      <div>
        {this.props.children(this.state.position)}
      </div>
    )
  }
}
