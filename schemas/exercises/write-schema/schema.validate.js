import { validate } from '../../../lib/validate.js';

import { schema } from './schema.js';

const testData = [
  {
    name: 'Sonia',
    age: 38,
    isProgrammer: true,
    languages: ['Python', 'C++', 'Turkish', 'Fortran', 'Farsi'],
  },
  {
    name: 'Peter',
    age: 68,
    isProgrammer: false,
    languages: ['Dutch', 'French', 'English'],
  },
  {
    name: 'Alex',
    age: 4,
    languages: ['Dutch', 'JavaScript', 'English'],
  },
  {
    languages: ['Spanish', 'Portuguese'],
    age: 18,
    name: 'Robert',
  },
  {
    age: 22,
    name: 'American',
    languages: ['English'],
  },
];

for (let i = 0; i < testData.length; i++) {
  const data = testData[i];
  console.group(`test data #${i}`);
  console.log('------- data -------\n\n', data, '\n\n');
  validate(schema, data, false);
  console.groupEnd();
}
