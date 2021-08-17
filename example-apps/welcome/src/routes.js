import { home } from './components/pages/home/index.js';
import { changeGreeting } from './components/pages/change-greeting/index.js';
import { changeMessage } from './components/pages/change-message/index.js';

/**
 * Defines the route URLs, names and callbacks.
 *
 * @exports routes
 */

export const routes = [
  {
    name: 'home', // what to the user reads in the navbar
    path: `/`, // the URL path
    page: home, // the page component to render
  },
  {
    name: 'change greeting',
    path: 'greeting',
    page: changeGreeting,
  },
  {
    name: 'change message',
    path: 'message',
    page: changeMessage,
  },
];
