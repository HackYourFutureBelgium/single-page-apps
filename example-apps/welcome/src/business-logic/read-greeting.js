import { read } from '../data-access/read.js';

export const readGreeting = () => {
  return read('greeting');
};
