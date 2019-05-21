import React, { Component } from 'react';
import FunctionalComp from './functionComp';

export default class Greeting extends Component{

    state = {
        val:1
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({val:1})
        },3000)
    }

    render(){
        return(
            <div className="App">
            <div>
                <h1>memo demo</h1>
                <FunctionalComp val={this.state.val}></FunctionalComp>
            </div>
            </div>
        )
    }
}