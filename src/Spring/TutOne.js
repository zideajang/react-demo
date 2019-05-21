import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function TutOne() {
  return (
    <Spring
      from={{ opacity:0, marginTop:-500}}
      to={{opacity:1, marginTop:0}}
      >
    { props => (
        <div style={props}>
          <div style={angularStyle}>
            <h1>Angularjs</h1>
            <p>AngularJS 诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，</p>
            <Spring
              from={{number:0}}
              to={{number:10}}
              config={{ duration:10000}}
              >
              {props => (
                <div style={props}>
                  <h1 style={counter}>
                    {props.number.toFixed()}
                  </h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )
    }
    </Spring>
  )
}

const angularStyle = {
    background:'steelblue',
    color:'white',
    padding:'1.25rem'
}

const counter = {
  background:'#333',
  textAlign:'center',
  borderRadius:'50%',
  width:'60px',
  margin:'1rem auto'
};