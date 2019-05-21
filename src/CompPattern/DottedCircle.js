import React, {Component} from 'react'
export default function DottedCircle(AnyCircle) {
    return class Circle extends Component{
        constructor(){
            super();
            this.state = { smarts: "smarts"}
        }
        render(){
            return <AnyCircle {...this.state}/>
        }
    }
}


