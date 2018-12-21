import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store';
import { deleteFromPosts } from '../actions/post_actions'

class Post extends Component {
  deletePosts = (id, e) => {
    e.preventDefault();
    store.dispatch(deleteFromPosts(id));
  }
  render() {
    const {userId, id, title, body} = this.props.item;
    return (
      <div className="col-lg-3 mb-3">
       <div className="card">
        <div className="card-body">
        <h5 className="d-flex justify-content-between">
          <a href="#" className="text-dark"> {title}</a>
          <div className="dropdown">
          <a href="#" className="dropdown-toggle text-dark" data-toggle="dropdown">
          <i className="fas fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu">
          <a href="#" className="dropdown-item" onClick={this.deletePosts.bind(this, id)}>Delete Posts</a>
          <Link to={"/update_posts/" + id} className="dropdown-item">Update Posts</Link>
          <a href="#" className="dropdown-item">Another Action</a>
          </div>
          </div>
        </h5>
          <p className="card-text">{body} <br /><span className="badge badge-secondary small">user id {userId}</span></p>
        </div>
        </div>
      </div>
    )
  }
}

export default Post;
