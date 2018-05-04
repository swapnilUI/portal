import axios from 'axios';
import {GET_DISCUSSIONS,POST_COMMENT,REMOVE_COMMENT, START_DISCUSSION} from '../actionTypes';

const getListAction = (data)=>{
  return {
    type: GET_DISCUSSIONS,
    payload:data
  }
}
const postComment = (post) =>{
  return{
    type:POST_COMMENT
  }
}
const deleteComment = (comment)=>{
  return{
    type:REMOVE_COMMENT
  }
}
const startDiscussion = (discussion)=>{
  return{
    type:START_DISCUSSION
  }
}
export function getDiscussions(){
    return function (dispatch)
        {
          return axios.get('http://localhost:8080/api/discussions').then(res => {
             dispatch(getListAction(res.data));
        });
      }
}
export function submitDiscussion(postData){
    return function(dispatch)
    {
      return axios.post("http://localhost:8080/api/addDiscussion", postData,{
        headers:{
          'Authorization': localStorage.id_token
        }
      }).then(res =>{
          dispatch(getDiscussions());
      });
    }
}
export function submitComment(postId, postData){
  postData.params = {
    id: postId
  }
  return function(dispatch){
    return axios.post("http://localhost:8080/api/comments/", postData,{
        headers: {
            'Authorization': localStorage.id_token,
        }
    }).then(res =>{
      dispatch(getDiscussions());
    })
  }
}
export function removeComment(postId, commentId){
  let postData = {};
  postData.params = {};
  postData.params.id = postId;
  postData.params.commentId = commentId;
  return function(dispatch){
      return axios.post("http://localhost:8080/api/removecomment", postData).then(res=>{
        dispatch(getDiscussions());
      });
  }
}
