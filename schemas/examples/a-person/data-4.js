import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  age: 89,
  firstName: 'Chaise',
};

validate(schema, data);
