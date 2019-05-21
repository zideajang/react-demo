
import React, { useState } from 'react';

const Greeting = () =>{

    const [level,setLevel] = useState(5);
    const [name,setName] = useState('zidea');



    return(
        <div className="App">
            <div>
                <p>
                    Name:<input type="text" value={name}
                        onChange={e => setName(e.target.value)}></input>

                </p>
                <p>
                    <p>level:{level}</p>
                    <button 
                        onClick={()=> setLevel(level+ 1)}
                        >increment level</button>
                </p>
                <p>
                    
                </p>
            </div>
        </div>
    )
}
export default Greeting
