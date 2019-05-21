import React, { Component } from 'react';
import RandomPosition from './RandomPosition';


const ReactLogo = (props) =>{
  return(
    <img
      style={props.position}
      onClick={props.jump}
      onMouseOver={props.flip}
      src="../public/react-logo.png"
    />
  )
}

const ExtendedReactLogo= RandomPosition(ReactLogo);

export default class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount(){
        this.setState({
            count:this.state.count + 1
        });
    }

    resetCount(){
        this.setState({
            count:0
        })
    }

    render(){
        const children = [];
        for(let i  =0; i < this.state.count; i++){
            children.push(<ExtendedReactLogo key={i}/>);
        }

        return (
            <div className="container">
                {children}
                <br/>
                <button className="btn btn-blue count" 
                    onClick={this.incrementCount}
                    >
                    <h1>添加</h1>
                    </button>
            </div>
        )
    }
}