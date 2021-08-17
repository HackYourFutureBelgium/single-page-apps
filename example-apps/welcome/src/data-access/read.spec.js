import { friendly } from '../../data/friendly.js';
import { read } from './read.js';

describe('read: reads an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('throws an error if the key does not exist', () => {
    const readMissingKey = () => read('pie');
    expect(readMissingKey).toThrow(ReferenceError);
  });

  describe('reads the value from a specific key, if that key exists', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      friendly.toad = 'not a frog';
      // try reading the key's value
      const returnedValue = read('toad');
      // assert the returned value
      expect(returnedValue).toEqual('not a frog');
    });
    it('does not modify the stored data', () => {
      friendly.loggedIn = false;
      read('loggedIn');
      expect(friendly.loggedIn).toEqual(false);
    });
  });

  describe('read returns a copy of data you requested', () => {
    it('does not store the same array you pass', () => {
      friendly.someNumbers = [1, 2, 3];
      const returnedValue = read('someNumbers');
      const areDifferentArrays = friendly.someNumbers !== returnedValue;
      expect(areDifferentArrays).toEqual(true);
    });
    it('does return a deep clone of the data requested', () => {
      friendly.someNumbers = [1, 2, 3];
      const returnedValue = read('someNumbers');
      // assert deep equality!
      expect(returnedValue).toEqual(friendly.someNumbers);
    });
  });
});
