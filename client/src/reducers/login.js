import {LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT_SUCCESS} from '../actionTypes';

const login = (state={
  loginPending:false,
  loginSuccess:false,
  loginFailure:false,
  userLogout:true,
  user:"",
  error:""
},action)=>{
  switch (action.type) {
    case LOGIN_PENDING:
        return {
          loginPending:true,
          loginSuccess:false,
          loginFailure:false,
          userLogout:true,
          error:"",
          user:""
        }

    case LOGIN_SUCCESS:
        return {
          loginPending:false,
          loginSuccess:true,
          loginFailure:false,
          user:action.payload,
          userLogout:false,
          error:""
        }
    case LOGIN_FAILURE:
        return{
          loginPending:false,
          loginSuccess:false,
          loginFailure:true,
          userLogout:true,
          user:"",
          error:action.payload
        }
    case LOGOUT_SUCCESS:
    return{
      loginPending:false,
      loginSuccess:false,
      loginFailure:false,
      userLogout:true,
      error:""
    }
    default:
    return state

  }
}

export default login;
