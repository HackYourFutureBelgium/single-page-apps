import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  vegetables: [],
  fruits: [
    'papaya',
    'mango',
    'pineapple',
    'apple',
    'pear',
    'dragonfruit',
    'guava',
  ],
};

validate(schema, data);
