import React, { Component } from 'react';

 const RandomPosition = (WrappdComponent) =>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                position:{
                    top:`${Math.floor(Math.random() * 100)}vh`,
                    left:`${Math.floor(Math.random() * 100)}vw`
                }
            };
        }

        render(){
            return <WrappdComponent {...this.props} position={this.state.position}/>
        }
    }
}

export default RandomPosition;