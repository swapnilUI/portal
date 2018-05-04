import React,{Component} from 'react';
import {connect} from 'react-redux';
import {submitComment,removeComment} from '../../actions/discussions';

const CommentForm = (props)=>{
    if(localStorage.id_token){

      return(
          <form>
            <textarea name="comment" onChange={props.handleChange} placeholder="Comment..."></textarea>
            <button type="button" onClick={props.submitComment}>Post</button>
          </form>
        )
    }else {
      return null;
    }
}
class Comments extends Component{
  constructor(props){
    super(props);
    this.state ={
      comment:""
    }
    this.onchange = this.onchange.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }
  onchange(e){
    this.setState({
      comment:e.target.value
    })
  }
  submitComment(){
    if(this.state.comment !== ""){
      const postData={}
      postData.comment = this.state.comment;
      postData.posted_by = JSON.parse(localStorage.loggedInUser).name;
      this.props.submitComment(this.props.postid, postData).then(()=>{
        this.setState({
          comment:""
        })
      });

    }
  }
  removeComment(commentId){
    this.props.removeComment(this.props.postid, commentId).then(()=>{
      this.setState({
          comment:""
      })
    });
  }
  render(){
    return(
      <div className="commentsSection">
      <CommentForm handleChange={this.onchange} submitComment={this.submitComment} />
        {this.props.post.comments.map((comment,index) =>
          <div key={index} className="comment-wrapper">
          {localStorage.id_token && JSON.parse(localStorage.loggedInUser).name === comment.posted_by ?<a onClick={this.removeComment.bind(null,comment._id)} className="pull-right" href="javascript:void(0)"><strong>x</strong></a>:null}

            <p><strong>{comment.posted_by}  </strong></p>
            <p>{comment.comment}</p>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return state
}
const mapDispatchToProps = dispatch =>{
  return {
    submitComment:(id,data) => dispatch(submitComment(id,data)),
    removeComment:(id,commentId)=>dispatch(removeComment(id, commentId))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments);
