import { constants } from 'app';

const defaultState = {
  data: null
};

const placeholder = (state = defaultState, action) => {
  switch(action.type) {
    case constants.setPlaceholderData:
      return {
        ...state,
        data: action.payload
      };
    case constants.clearPlaceholderData:
      return {
        ...state,
        data: defaultState.data
      };
    default:
      return state;
  }
};

export { placeholder, defaultState };
