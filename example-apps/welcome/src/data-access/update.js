import { deepClone } from '../../../../lib/deep-clone.js';
import { isJsonData } from '../../../../lib/is-json-data.js';

import { friendly } from '../../data/friendly.js';

export const update = (key, newValue) => {
  if (!isJsonData(newValue)) {
    throw new TypeError('cannot update: new value is not JSON-friendly');
  }

  if (key in friendly) {
    const clonedValue = deepClone(newValue);
    friendly[key] = clonedValue;

    console.groupCollapsed(`: update "${key}":`, newValue);
    console.trace('new state:', deepClone(friendly));
    console.groupEnd();

    return newValue;
  } else {
    throw new ReferenceError(`cannot update: key "${key}" does not exist`);
  }
};
