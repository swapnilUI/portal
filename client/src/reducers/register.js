import {REGISTER_SUBMIT} from '../actionTypes';

const register = (state = [], action) => {
    switch (action.type) {
      case REGISTER_SUBMIT:
            return action.payload;
        break;
      default:
          return state;
    }
}

export default register;
