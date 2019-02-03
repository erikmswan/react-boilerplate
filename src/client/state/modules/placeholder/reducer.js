import { constants } from 'app';

const initialState = {
  data: null
};

const placeholder = (state = initialState, action) => {
  switch(action.type) {
    case constants.setPlaceholderData:
      return {
        ...state,
        data: action.payload
      };
    case constants.clearPlaceholderData:
      return {
        ...state,
        data: initialState.data
      };
    default:
      return state;
  }
};

export { placeholder, initialState };
