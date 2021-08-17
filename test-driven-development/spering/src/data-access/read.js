import { deepClone } from '../../../lib/deep-clone.js.js';

import { something } from '../data/something.js';

export const read = (key) => {
  if (key in something) {
    const storedValue = something[key];
    const clonedValue = deepClone(storedValue);

    console.groupCollapsed(`: read   "${key}":`, clonedValue);
    console.trace('new state:', deepClone(something));
    console.groupEnd();

    return clonedValue;
  } else {
    throw new ReferenceError(`cannot read: key "${key}" does not exist`);
  }
};
