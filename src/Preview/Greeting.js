import React, { Component,Fragment } from 'react'
import ToggleRenderRPC from './ToggleRenderRPC';
import Portal from './Portal';

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <ToggleRenderRPC>
           { ({on,toggle}) => (
                <Fragment>
                    {on && <h1>Zidea React</h1>}
                    <button onClick={toggle}>显示/隐藏</button>
                    <Portal>
                        {on && <h1>Portal</h1>}
                    </Portal>
                </Fragment>
            )}
        </ToggleRenderRPC>
        
      </div>
    )
  }
}
