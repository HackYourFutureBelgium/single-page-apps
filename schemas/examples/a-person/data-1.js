import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  firstName: 'Peter',
  age: 32,
};

validate(schema, data);
