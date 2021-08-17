import { beWelcoming } from '../../../business-logic/be-welcoming.js';

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement('main');
  container.className = 'page';
  container.innerHTML = beWelcoming();

  // container.appendChild(inputGreeting(changeGreeting));

  return container;
};
