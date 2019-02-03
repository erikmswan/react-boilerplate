
import { constants } from 'app';

export const setPlaceholderData = placeholderData => ({
  type: constants.setPlaceholderData,
  payload: placeholderData
});

export const clearPlaceholderData = () => ({
  type: constants.clearPlaceholderData
});
