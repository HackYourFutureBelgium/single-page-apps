import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  age: 43,
  firstName: 'Alana',
  lastName: 'Rodriguez',
};

validate(schema, data);
