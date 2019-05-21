import React, { Component } from 'react'
import {useSpring, animated} from 'react-spring'
const Greeting = function () {
  
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return <animated.h1 scroll={props}>zidea basic</animated.h1>

}
export default Greeting;