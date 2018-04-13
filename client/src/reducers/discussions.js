import {GET_DISCUSSIONS} from '../actionTypes'

const discussions = (state = [], action) => {
    switch (action.type) {
      case GET_DISCUSSIONS:
            return action.payload;
      
      default:
          return state;
    }
}

export default discussions;
