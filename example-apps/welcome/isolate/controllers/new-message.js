import { updateMessage } from '../../src/business-logic/update-message.js';

import { info } from '../views/info.js';
import { warning } from '../views/warning.js';

export const newMessage = (message) => {
  debugger;

  if (typeof message === 'string') {
    updateMessage(message);
    info(`the message is now "${message}"`);
  } else {
    warning('new message must be a string');
  }
};
