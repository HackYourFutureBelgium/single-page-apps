import { friendly } from '../../data/friendly.js';

import { readGreeting } from './read-greeting.js';

describe('readGreeting: reads the greeting value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('returns an empty string if the greeting is empty', () => {
    friendly.greeting = '';
    const greeting = readGreeting();
    expect(greeting).toEqual('');
  });

  it('returns the value if it is not empty', () => {
    friendly.greeting = 'hello';
    const greeting = readGreeting();
    expect(greeting).toEqual('hello');
  });
});
