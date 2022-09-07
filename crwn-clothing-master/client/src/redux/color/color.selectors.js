import { createSelector } from 'reselect';

const selectColor = state => state.light_pale_white;

export const selectColorSections = createSelector(
  [selectColor],
  light_pale_white => light_pale_white.sections
);
