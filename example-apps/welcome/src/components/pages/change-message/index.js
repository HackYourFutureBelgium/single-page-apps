import { readMessage } from '../../../business-logic/read-message.js';
import { updateMessage } from '../../../business-logic/update-message.js';

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const changeMessage = () => {
  const container = document.createElement('main');
  container.className = 'page';

  const inputEl = document.createElement('input');
  inputEl.value = readMessage();
  inputEl.addEventListener('keyup', (event) => {
    updateMessage(event.target.value);
  });

  container.appendChild(document.createTextNode('message: '));
  container.appendChild(inputEl);

  return container;
};
