import axios from 'axios';
import {GET_DISCUSSIONS} from '../actionTypes';

export const getListAction = (data)=>{
  return {
    type: GET_DISCUSSIONS,
    payload:data
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
