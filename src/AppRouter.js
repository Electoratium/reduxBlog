import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './components/base/Header';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';

import EditPost from './containers/EditPost';
import NotFound from './components/pages/NotFound';

import {postsActions} from './actions/posts';

import './index.css';


class AppRouter extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header/>
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/post/edit/:id" component={EditPost} />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, dispatch => ({
  fetchPosts: () => dispatch(postsActions.showAll())
}))(AppRouter);
