import { deepClone } from '../../../../lib/deep-clone.js';

import { friendly } from '../../data/friendly.js';

export const read = (key) => {
  if (key in friendly) {
    const storedValue = friendly[key];
    const clonedValue = deepClone(storedValue);

    console.groupCollapsed(`: read   "${key}":`, clonedValue);
    console.trace('new state:', deepClone(friendly));
    console.groupEnd();

    return clonedValue;
  } else {
    throw new ReferenceError(`cannot read: key "${key}" does not exist`);
  }
};
