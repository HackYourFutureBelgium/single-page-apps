export const fourOhFour = (routeName = '') => {
  const missingPageEl = document.createElement('h1');
  missingPageEl.innerHTML = `oops! /${routeName} does not exist`;
  return missingPageEl;
};
