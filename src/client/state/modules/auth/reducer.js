import { constants } from 'app';

const defaultState = {
  apiKey: null
};

const auth = (state = defaultState, action) => {
  switch(action.type) {
    case constants.setApiKey:
      return {
        ...state,
        apiKey: action.payload
      };
    default:
      return state;
  }
};

export { auth, defaultState };
