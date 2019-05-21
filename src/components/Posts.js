import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions'

//https://jsonplaceholder.typicode.com/posts
class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }
 
  render() {
      const postItems = this.props.posts.map(post => (
          <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
        <h1>Posts</h1>
        <div>{postItems}</div>
      </div>
    )
  }
}

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps,
    { fetchPosts })(Posts) ;
