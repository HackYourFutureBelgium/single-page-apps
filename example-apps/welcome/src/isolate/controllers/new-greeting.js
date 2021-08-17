import { updateGreeting } from '../../business-logic/update-greeting.js';

import { info } from '../views/info.js';
import { warning } from '../views/warning.js';

export const newGreeting = (greeting) => {
  debugger;

  if (typeof greeting === 'string') {
    updateGreeting(greeting);
    info(`the greeting is now "${greeting}"`);
  } else {
    warning('new greeting must be a string');
  }
};
