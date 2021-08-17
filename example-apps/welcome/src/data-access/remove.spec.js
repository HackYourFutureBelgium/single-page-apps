import { friendly } from '../../data/friendly.js';
import { remove } from './remove.js';

describe('remove: removes an entry from the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('throws an error if the key does not exist', () => {
    const removeMissingKey = () => remove('pie');
    expect(removeMissingKey).toThrow(ReferenceError);
  });

  describe('removes the value from a specific key, if that key exists', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      friendly.toad = 'not a frog';
      // try removeing the key's value
      remove('toad');
      // assert the new data
      expect('toad' in friendly).toEqual(false);
    });
  });

  describe('it returns the value of the deleted key', () => {
    it('gives you back your fruit', () => {
      friendly.fruit = ['guava', 'papaya'];
      const yourFruit = remove('fruit');
      expect(yourFruit).toEqual(['guava', 'papaya']);
    });
  });
});
