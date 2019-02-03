import { createSelector } from 'reselect';
import { getLocationType } from 'state/selectors';

export const getPlaceholderData = state => state?.placeholder?.data;

export const getPlaceholderByLocationType = createSelector(
  getLocationType,
  getPlaceholderData,
  (locationType, placeholderData) => (
    placeholderData.filter(placeholderItem => placeholderItem.locationType === locationType)
  )
);
