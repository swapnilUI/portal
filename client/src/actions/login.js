import {LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT_SUCCESS} from '../actionTypes';
import axios from 'axios';

const loginPending =(ispending)=>{
  return {
    type:LOGIN_PENDING,
    payload:ispending
  }
}

const loginSuccess = user =>{
  return{
    type:LOGIN_SUCCESS,
    payload:user
  }
}

const loginFailure= error=>{
  return{
    type:LOGIN_FAILURE,
    payload:error
  }
}
const userLogoutSuccess = user =>{
  return{
    type:LOGOUT_SUCCESS
  }
}

export function submitLogin(userData){
  loginPending(true)
  return function(dispatch){
      return axios.post("http://localhost:8080/api/login",userData).then(res=>{
        if(res.data.success === true){
          localStorage.id_token = res.data.token;
          localStorage.loggedInUser = JSON.stringify(res.data.user);
          dispatch(loginSuccess(res.data.user));
        }else{
          dispatch(loginFailure(res.data));
        }
      }).catch(err=>{
        dispatch(loginFailure(err));
      });
  }
}
export function userLogout(){
  return function(dispatch){
     localStorage.clear();
     dispatch(userLogoutSuccess());
  }
}
