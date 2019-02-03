// import client from 'client';
import placeholderStub from 'stubs/placeholder.json';
import { setPlaceholder } from 'state/actions';
import { getPlaceholder } from 'state/selectors';

export const fetchPlaceholder = async (dispatch, getState) => {
  const state = getState();
  const placeholder = getPlaceholder(state);

  if (!placeholder) {
    // add this back in when the services are hooked up
    // const fetchedPlaceholder = await client.getPlaceholder();
    const fetchedPlaceholder = placeholderStub;
    return dispatch(setPlaceholder(fetchedPlaceholder));
  }

  return Promise.resolve();
};
