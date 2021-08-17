import { update } from '../data-access/update.js';

export const updateMessage = (newValue) => {
  return update('message', newValue);
};
