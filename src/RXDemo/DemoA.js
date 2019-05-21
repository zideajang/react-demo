import React, { Component } from 'react'
import { Stream } from "react-streams"
import { of, pipe } from "rxjs"
import { delay, startWith } from "rxjs/operators"


const startWithAndDelay = (msg,time) => {
    pipe(
        delay(time),
        startWith({msg})
    )
}

const message$ = of({ message: "Hello" })

export default ()=> {
    return (
        <div className="section">
        <h2 className="title">Stream as a Component</h2>
        <Stream
          source={message$}
          pipe={startWithAndDelay("Wait...", 5000)}
        >
          {({ message }) => <div>{message}</div>}
        </Stream>
        <Stream
          source={message$}
          pipe={startWithAndDelay("Wait longer...", 3000)}
        >
          {({ message }) => <div>{message}</div>}
        </Stream>
      </div>
    )
}
