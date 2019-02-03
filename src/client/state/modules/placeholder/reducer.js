
import { constants } from 'app';

const defaultState = {
  data: null
};

const placeholder = (state = defaultState, action) => {
  switch(action.type) {
    case constants.setPlaceholder:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export { placeholder, defaultState };
