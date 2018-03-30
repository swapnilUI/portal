import React, {Component} from 'react';
import LandingStyle from './Landing.scss';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <li className="post-list">
      <h4>{this.props.post.heading}</h4>
      <p>{this.props.post.description}</p>
      <p>
        <small>posted by: {this.props.post.author}</small>
        <span className="comments">Comments</span>
      </p>
      {this.props.post.comments.map((comment) =>
      <p className="comment-wrapper">
        <span ><small>{comment.posted_by} : </small></span>
        <span >{comment.comment}</span>
      </p>
      )}
      </li>
    )
  }
}

export default Post;

