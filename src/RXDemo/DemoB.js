import React, { Component } from 'react'

import { stream } from "react-streams"
import { interval } from "rxjs"
import { map } from "rxjs/operators"

import Counter from './Counter'

export default () => {
    return (
    <div>
    <h2>Subscribe to a Stream</h2>
    <Counter>
      {({ count }) => <div>{count}</div>}
    </Counter>
  </div>

    )
}
