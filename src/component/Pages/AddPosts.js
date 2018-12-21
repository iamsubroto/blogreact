import React, { Component } from 'react'
import { addToPosts } from '../../actions/post_actions';
import store from '../../store'
import uuidv1 from 'uuid'

class AddPosts extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: uuidv1(),
          userId: '',
          title: '',
          body: ''
      }
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }
  addPosts = (e) => {
      const { id, userId, title, body } = this.state;
      e.preventDefault();
      store.dispatch(addToPosts(id, userId, title, body));
       this.props.history.push("/");
  }
  render() {
      const { userId, title, body } = this.state;
    return (
      <div className="container">
        <div className="card">
            <div className="card-header">Create Posts</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                    <label>User Id</label>
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter Your ID"
                    name="userId"
                    value={userId}
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label>Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter the Title..."
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label>Body</label>
                    <textarea 
                    rows="4" 
                    className="form-control"
                    placeholder="Enter the Body..."
                    name="body"
                    value={body}
                    onChange={this.handleChange}
                    />
                    </div>
                    <input 
                    type="submit" 
                    className="btn btn-primary" 
                    value="Add Posts"
                    onClick={this.addPosts}
                    />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default AddPosts;
