import React, { Component } from 'react';
import NavigationBar from './component/NavigationBar'
import Main from './component/Main'
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { addToPosts, updatePosts, deleteFromPosts } from './actions/post_actions'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './component/Pages/About'
import Contact from './component/Pages/Contact'
import UpdatePosts from './component/Pages/UpdatePosts'
import AddPosts from './component/Pages/AddPosts'

class App extends Component {


  render() {
    return (
        <Provider store={store}>
          <Router>
           <div className="App">
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={ Main} />
              <Route exact path="/about" component={ About } />
              <Route exact path="/contact" component={ Contact} />
              <Route exact path="/update_posts/:id" component={UpdatePosts} />
              <Route exact path="/add_posts" component={AddPosts} />
          </Switch>
        </div>          
          </Router>
      </Provider>
    )
  }
}

export default App;
