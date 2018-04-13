import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './Landing.scss';

class PostsList extends Component{
  constructor(props){
    super(props);
    console.log("props", props)
  }
    render(){
      return(<ul>
        {this.props.posts.map((post,index) =>
          <li key={post.heading} className="post-list">
          <h4>{post.heading}</h4>
          <p>{post.description}</p>
          <p>
            <small>posted by: {post.author}</small>
            <span className="comments">Comments</span>
          </p>
          {post.comments.map((comment) =>
          <p key={comment.posted_by} className="comment-wrapper">
            <span ><small>{comment.posted_by} : </small></span>
            <span >{comment.comment}</span>
          </p>
          )}
          </li>
        )}
        </ul>
      )
    }
}
PostsList.propTypes= {
    discussions: PropTypes.array
}
export default PostsList;
