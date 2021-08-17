import { readGreeting } from '../../../../business-logic/read-greeting.js';
import { updateGreeting } from '../../../../business-logic/update-greeting.js';

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const changeGreeting = () => {
  const container = document.createElement('main');
  container.className = 'page';

  const inputEl = document.createElement('input');
  inputEl.value = readGreeting();
  inputEl.addEventListener('keyup', (event) => {
    updateGreeting(event.target.value);
  });

  container.appendChild(document.createTextNode('greeting: '));
  container.appendChild(inputEl);

  return container;
};
