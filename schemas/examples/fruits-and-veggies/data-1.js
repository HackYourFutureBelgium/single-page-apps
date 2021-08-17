import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  fruits: ['bananas', 'oranges', 'papayas'],
  vegetables: [
    {
      veggieName: 'carrot',
      veggieLike: true,
    },
    {
      veggieLike: false,
      veggieName: 'potato',
    },
    {
      veggieName: 'radish',
      veggieLike: true,
    },
  ],
};

validate(schema, data);
