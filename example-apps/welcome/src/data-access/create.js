import { deepClone } from '../../../../lib/deep-clone.js';
import { isJsonData } from '../../../../lib/is-json-data.js';

import { friendly } from '../../data/friendly.js';

export const create = (key, value) => {
  if (!isJsonData(value)) {
    throw new TypeError('cannot update: new value is not JSON-friendly');
  }

  if (key in friendly) {
    throw new ReferenceError(`cannot create: key "${key}" already exists`);
  } else {
    const clonedValue = deepClone(value);
    friendly[key] = clonedValue;

    console.groupCollapsed(`: create "${key}:"`, clonedValue);
    console.trace('new state:', deepClone(friendly));
    console.groupEnd();

    return value;
  }
};
