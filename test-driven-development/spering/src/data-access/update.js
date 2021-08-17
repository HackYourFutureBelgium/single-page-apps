import { deepClone } from '../../../lib/deep-clone.js.js';
import { isJsonData } from '../../../lib/is-json-data.js.js';

import { something } from '../data/something.js';

export const update = (key, newValue) => {
  if (!isJsonData(newValue)) {
    throw new TypeError('cannot update: new value is not JSON-something');
  }

  if (key in something) {
    const clonedValue = deepClone(newValue);
    something[key] = clonedValue;

    console.groupCollapsed(`: update "${key}":`, newValue);
    console.trace('new state:', deepClone(something));
    console.groupEnd();

    return newValue;
  } else {
    throw new ReferenceError(`cannot update: key "${key}" does not exist`);
  }
};
