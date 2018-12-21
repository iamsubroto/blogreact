import React, { Component } from 'react'
import Post from './Post'
import { connect } from "react-redux";

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="row">
      {
        posts.map((item) => {
        return <Post key={item.id} item={item} />
      })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    posts: state.Posts.posts
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch({type: 'GET_POSTS'})
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts);