// import client from 'client';
import placeholderStub from 'stubs/placeholder.json';
import { setPlaceholderData } from 'state/actions';
import { getPlaceholderData } from 'state/selectors';

export const composeThunks = (...thunks) => (...args) => {
  if (thunks.length === 1) {
    return thunks[0](...args);
  }

  return thunks.reduce((chain, thunk) => chain.then(() => thunk(...args)), Promise.resolve());
};

export const fetchPlaceholder = async (dispatch, getState) => {
  const state = getState();
  const placeholder = getPlaceholderData(state);

  if (!placeholder) {
    // add this back in when the services are hooked up
    // const fetchedPlaceholder = await client.getPlaceholder();
    const fetchedPlaceholder = placeholderStub;
    return dispatch(setPlaceholderData(fetchedPlaceholder));
  }

  return Promise.resolve();
};
