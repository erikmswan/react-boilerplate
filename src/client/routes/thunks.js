import client from 'client';
import { setPlaceholder } from 'state/actions';
import { getPlaceholder } from 'state/selectors';

export const fetchPlaceholder = async (dispatch, getState) => {
  const state = getState();
  const placeholder = getPlaceholder(state);

  if (!placeholder) {
    const fetchedPlaceholder = await client.getPlaceholder();
    return dispatch(setPlaceholder(fetchedPlaceholder));
  }

  return Promise.resolve();
};
