import { friendly } from '../../data/friendly.js';

import { beWelcoming } from './be-welcoming.js';

describe("beWelcoming: wraps the state's greeting in a friendly message", () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('returns an empty string if the greeting and message are empty', () => {
    friendly.greeting = '';
    friendly.message = '';
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('');
  });

  it('returns only a greeting if the message is empty', () => {
    friendly.greeting = 'hello';
    friendly.message = '';
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('hello!');
  });

  it('returns only a message if the greeting is empty', () => {
    friendly.greeting = '';
    friendly.message = 'welcome to this app';
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('welcome to this app.');
  });

  it('returns a message and greeting if they are not empty', () => {
    friendly.greeting = 'hello';
    friendly.message = 'welcome to this app';
    const welcomingMessage = beWelcoming();
    expect(welcomingMessage).toEqual('hello! welcome to this app.');
  });
});
