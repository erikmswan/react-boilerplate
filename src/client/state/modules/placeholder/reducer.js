
import { constants } from 'app';

const defaultState = {
  placeholder: ''
};

const placeholder = (state = defaultState, action) => {
  switch(action.type) {
    case constants.setPlaceholder:
      return {
        ...state,
        placeholder: action.payload
      };
    default:
      return state;
  }
};

export { placeholder, defaultState };
