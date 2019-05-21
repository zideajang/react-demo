import React, { useState } from 'react'

function Tut({ tut, index}){
    return (
        <div className="title">
           {
               tut.title
           } 
        </div>
    )
}

function TutForm({addTut}){
    const [value,setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        
        if(!value) return;
        addTut(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">添加课程</label>
                <div className="control">
                    <input
                        placeholder="请输入课程名称" 
                        type="text" className="input" value={value} 
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
            </div>
            {/* <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">添加</button>
                </div>
               
            </div> */}
        </form>
    )
}

function Greeting() {


    const [tuts,setTuts] = useState([
        {
            title:"angular basic tut",
            isCompleted:false
        },
        {
            title:"react basic tut",
            isCompleted:false
        },
        {
            title:"vue basic tut",
            isCompleted:false
        }
    ]);

    const addTut = title => {
        const newTuts = [...tuts,{ title}]
        setTuts(newTuts);
    }

    return(
        <div className="container">
            <div className="section">
                {tuts.map((tut,index)=>(
                    <Tut key={index} 
                        index={index}
                        tut={tut}/>
                    
                ))}
                <TutForm addTut={addTut}/>
            </div>
        </div>
    )
}

export default Greeting;