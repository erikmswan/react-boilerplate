
import { constants } from 'app';

export const setPlaceholder = placeholder => ({
  type: constants.setPlaceholder,
  payload: placeholder
});
