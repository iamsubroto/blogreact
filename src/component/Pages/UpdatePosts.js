import React, { Component } from 'react'
import { connect } from "react-redux";
import { updatePosts } from '../../actions/post_actions';
import store from '../../store'

class UpdatePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            id: '',
            title: '',
            body: ''
        }
    }
    
 
    componentDidMount() {
        this.props.getPosts();
                this.props.posts.filter(({userId, id, title, body}) => {
            if (id == this.props.match.params.id) {
                this.setState({
                    userId,
                    id,
                    title,
                    body,
                });
            }
        })

    }
    handlerChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    };
    updatePosts = (userId, id, e) => {
        e.preventDefault();
        console.log(this.state);
        const { title, body } = this.state;
        store.dispatch(updatePosts(id, userId, title, body));
        this.props.history.push("/");
    }

  render() {

    const { userId, id, title, body } = this.state;

    return (
      <div className="container">
                    <div className="card">
                    <div className="card-header">Update Post</div>
                        <div className="card-body">
                         <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                name ="title"
                                type="text" 
                                className="form-control" 
                                onChange={this.handlerChange}
                                value={title}
                                
                                />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea 
                                name="body" 
                                rows="4" 
                                className="form-control" 
                                value={body}
                                onChange={this.handlerChange}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.updatePosts.bind(this, userId, id)}>Update Post</button>
                        </form>                
                        </div>
                    </div>
                
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    posts: state.Posts.posts
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch({
        type: 'GET_POSTS'
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePosts);