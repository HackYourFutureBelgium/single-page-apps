import { read } from '../data-access/read.js';

export const readMessage = () => {
  return read('message');
};
