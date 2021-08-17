import { read } from '../data-access/read.js';

export const beWelcoming = () => {
  const greeting = read('greeting');
  const message = read('message');

  let welcomeMessage = '';
  if (greeting) {
    welcomeMessage += `${greeting}!`;
  }
  if (greeting && message) {
    welcomeMessage += ' ';
  }
  if (message) {
    welcomeMessage += `${message}.`;
  }

  return welcomeMessage;
};
