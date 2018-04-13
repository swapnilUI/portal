import {REGISTER_SUBMIT} from '../actionTypes';

const register = (state = [], action) => {
    switch (action.type) {
      case REGISTER_SUBMIT:
            return action.payload;
        
      default:
          return state;
    }
}

export default register;
