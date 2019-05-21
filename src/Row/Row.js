import React, { PureComponent } from 'react';

const Row = (props) => {
    return(
        <div>
            <div>{props.label}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Row;