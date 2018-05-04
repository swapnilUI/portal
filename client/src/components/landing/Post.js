import React, {Component} from 'react';
import Comments from './Comments';

class Post extends Component{
  constructor(props){
    super(props);
    this.state={
      showComments:false,
      postId:""
    }
    this.clickShowComments = this.clickShowComments.bind(this);
  }

  clickShowComments(e){
    if(this.state.showComments){
      this.setState({
        showComments:false
      })
    }else{
      this.setState({
        showComments:true
      })
    }
  }
  render(){
    const {post} = this.props;
    return(
      <li key={post.heading} className="post-list">
          <div className="inner">
            <h4>{post.heading}</h4>
            <p>{post.description}</p>
            <p>
              <small>Posted by: {post.author}</small>
              <small className="comments" onClick={post.comments.length > 0 ? this.clickShowComments:""}>Comments ({post.comments.length})</small>
            </p>
          </div>
          {this.state.showComments ? <Comments postid={post._id} post={post} />:null}
      </li>
    )
  }
}

export default Post;
