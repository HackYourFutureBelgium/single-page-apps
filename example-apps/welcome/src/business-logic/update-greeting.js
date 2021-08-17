import { update } from '../data-access/update.js';

export const updateGreeting = (newValue) => {
  return update('greeting', newValue);
};
