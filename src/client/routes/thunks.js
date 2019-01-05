import client from 'client';
import { setPlaceholder } from 'state/actions';

export const getPlaceholder = async dispatch => {
  const placeholder = await client.getPlaceholder();
  return dispatch(setPlaceholder(placeholder));
};
