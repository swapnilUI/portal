import React, {Component} from 'react';
import LandingStyle from './Landing.scss';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <li>
      <h3>{this.props.post.heading}</h3>
      <p>{this.props.post.description}</p>
      <small>posted by: {this.props.post.author}</small>
      </li>
    )
  }
}

export default Post;
