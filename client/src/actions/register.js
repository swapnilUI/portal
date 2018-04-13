import axios from 'axios';
import {REGISTER_SUBMIT} from '../actionTypes';

 const registerSubmitAction = (res)=>{
  return {
    type:REGISTER_SUBMIT,
    payload:res
  }
}

export function registerSubmit(userData){
  return function(dispatch){
    return axios.post('http://localhost:8080/api/signup', userData).then(res=>{
      dispatch(registerSubmitAction(res));
    });
  }
}
