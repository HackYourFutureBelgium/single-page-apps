import { deepClone } from '../../../lib/deep-clone.js.js';

import { something } from '../data/something.js';

export const remove = (key) => {
  if (key in something) {
    const oldValue = deepClone(something[key]);
    delete something[key];

    console.groupCollapsed(`: remove "${key}"`);
    console.trace('new state:', deepClone(something));
    console.groupEnd();

    return oldValue;
  } else {
    throw new ReferenceError(`cannot remove: key "${key}" does not exist`);
  }
};
