import React, { Component } from 'react';
import './Landing.scss';
import PostsList from './PostsList';
import {connect} from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <div>
        <h2>Active Discussions</h2>
        <PostsList posts = {this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    posts: state.discussions
  }
}

export default connect(mapStateToProps)(Landing);
