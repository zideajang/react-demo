import React, { Component } from 'react'


class PostFrom extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body:this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

  render() {
 
    return (
      <div>
        <nav className="navbar is-primary">
            新增
        </nav>
       <form onSubmit={this.onSubmit}>
           <div className="section">

               <label className="label">标题: {this.state.title}</label>
               <br/>
               <input 
                className="input"
                type="text" 
                name="title" 
                onChange={this.onChange}
                value={this.state.title}/>
           </div>
           <div className="section">
               <label className="label">内容: </label>
               <br/>
               <textarea 
               className="textarea"
               name="body" 
               onChange={this.onChange}
               value={this.state.body} />
           </div>
           <div className="section">
               <button 
                className="button is-primary"
                type="submit">提交</button>
           </div>
       </form>
      </div>
    )
  }
}

export default PostFrom;
