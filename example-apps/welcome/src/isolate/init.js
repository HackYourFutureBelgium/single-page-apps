import { newGreeting } from './controllers/new-greeting.js';
import { newMessage } from './controllers/new-message.js';
import { welcome } from './controllers/welcome.js';

window.app = {
  newGreeting,
  newMessage,
  welcome,
};
