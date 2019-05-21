import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'

import Discussion from './Discussion';
import Rules from './Rules';
import Workflow from './Workflow';

export default ()=>{
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Discussion}/>
            <Route exact path="/rules" component={Rules}/>
            <Route exact path="/workflow" component={Workflow}/>
        </Switch>
      </div>
    )
}
