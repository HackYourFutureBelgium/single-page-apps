import { deepClone } from '../../../../lib/deep-clone.js';

import { friendly } from '../../data/friendly.js';

export const remove = (key) => {
  if (key in friendly) {
    const oldValue = deepClone(friendly[key]);
    delete friendly[key];

    console.groupCollapsed(`: remove "${key}"`);
    console.trace('new state:', deepClone(friendly));
    console.groupEnd();

    return oldValue;
  } else {
    throw new ReferenceError(`cannot remove: key "${key}" does not exist`);
  }
};
