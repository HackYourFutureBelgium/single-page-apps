import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  lastName: 'Rabbit',
  age: 8,
  firstName: 'Roger',
};

validate(schema, data);
