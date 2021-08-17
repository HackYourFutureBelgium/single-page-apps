/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const container = document.createElement('footer');
  container.className = 'footer';
  container.innerHTML = 'bottom!';

  return container;
};
