import {combineReducers} from 'redux';
import discussions from './discussions'
import register from './register'

const allReducers = combineReducers({
  discussions,
  register
});

export default allReducers;
