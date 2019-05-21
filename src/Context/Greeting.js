import React, { Component } from 'react';

const MContext = React.createContext();

//创建 provider
class MProvider extends Component{
    state = {
        name:'zidea',
        age:35,
        married:true,
        level:5
    }

    render(){
        return(
            <MContext.Provider value={{
                state: this.state,
                changeMarryState : (b) => this.setState({
                    married:b
                }),
                incrementLevel :() => this.setState({
                    level:this.state.level + 1
                })
            }}>
                {this.props.children}
            </MContext.Provider>
        )
    }

}

const Family = (props) => (
    <div className="family">
        <Person/>
    </div>
)

class Person extends Component{
    
    render(){
        return (
            <div className="person">
                <MContext.Consumer>
                    {(context)=>(
                        <React.Fragment>
                            <p>I am {context.state.name}</p>
                            <p>I am {context.state.age} year old</p>
                            <p>I am {context.state.level} level</p>
                            <button onClick={context.incrementLevel} >increment level</button>
                        </React.Fragment>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}


class Greeting extends Component{

    render(){
        return(
            <MProvider>
                <div>
                    <Family/>
                </div>
            </MProvider>
        )
    }
}


export default Greeting;