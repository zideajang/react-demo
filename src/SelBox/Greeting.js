import React, { Component } from 'react'
import SelectBox from './features/select-box';

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>自定义下拉选择框</h1>
        <div style={{margin:'16px',position:'relative'}}>
            <SelectBox
                items={
                    [
                        {value:'angularjs',id:1},
                        {value:'reactjs',id:2},
                        {value:'vuejs',id:1},
                    ]
                }/>
        </div>
      </div>
    )
  }
}
