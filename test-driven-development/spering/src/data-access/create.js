import { deepClone } from '../../../lib/deep-clone.js.js';
import { isJsonData } from '../../../lib/is-json-data.js.js';

import { something } from '../data/something.js';

export const create = (key, value) => {
  if (!isJsonData(value)) {
    throw new TypeError('cannot update: new value is not JSON-something');
  }

  if (key in something) {
    throw new ReferenceError(`cannot create: key "${key}" already exists`);
  } else {
    const clonedValue = deepClone(value);
    something[key] = clonedValue;

    console.groupCollapsed(`: create "${key}:"`, clonedValue);
    console.trace('new state:', deepClone(something));
    console.groupEnd();

    return value;
  }
};
