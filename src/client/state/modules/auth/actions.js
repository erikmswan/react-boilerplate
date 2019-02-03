
import { constants } from 'app';

export const setApiKey = apiKey => ({
  type: constants.setApiKey,
  payload: apiKey
});
