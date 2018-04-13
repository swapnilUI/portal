import {combineReducers} from 'redux';
import discussions from './discussions'
import register from './register';
import login from './login';

const allReducers = combineReducers({
  discussions,
  register,
  login
});

export default allReducers;
