import { constants } from 'app';

const initialState = {
  apiKey: null
};

const auth = (state = initialState, action) => {
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

export { auth, initialState };
