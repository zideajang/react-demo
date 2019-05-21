import React, { Component } from 'react'

export default class Circle extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return (
            <div>
                <dir>circle</dir>
            </div>
        )
    }
}

// export default DottedCircle(AnyCircle){
//  return class Circle extends Component {
//     constructor(){
//         super()
//         this.state = {smarts:"smarts"}
//     }
//     render() {
//         return <AnyCircle {...this.state}/>
//     }
//     }
// }
