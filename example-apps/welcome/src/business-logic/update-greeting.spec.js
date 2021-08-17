import { friendly } from '../../data/friendly.js';

import { updateGreeting } from './update-greeting.js';

describe('updateGreeting: updates the greeting value from state', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('updates the greeting', () => {
    friendly.greeting = 'hello';
    updateGreeting('good bye');
    expect(friendly.greeting).toEqual('good bye');
  });

  it('returns the new greeting', () => {
    friendly.greeting = '';
    const greeting = updateGreeting('hi');
    expect(greeting).toEqual('hi');
  });
});
