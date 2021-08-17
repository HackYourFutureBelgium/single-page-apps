import { friendly } from '../../data/friendly.js';
import { update } from './update.js';

describe('update: updates an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('throws an error if the key does not exist', () => {
    const updateMissingKey = () => update('pie', 'apple');
    expect(updateMissingKey).toThrow(ReferenceError);
  });

  describe('writes a new value to keys that already exist', () => {
    it('toads are not frogs', () => {
      // assign a key in the data
      friendly.toad = '';
      // try updating the key's value
      update('toad', 'not a frog');
      // assert the key's new value
      expect(friendly.toad).toEqual('not a frog');
    });
    it('can write different types to the same key', () => {
      friendly.isOrange = '';
      update('isOrange', true);
      expect(friendly.isOrange).toEqual(true);
    });
    it('data should still have only 1 key after updating', () => {
      friendly.password = '';
      update('password', 'P@s5w0rD');
      const numberOfKeys = Object.keys(friendly).length;
      expect(numberOfKeys).toEqual(1);
    });
  });

  describe('update returns the value you pass in', () => {
    it('returns the same primitive value', () => {
      friendly.favoriteColor = 'blue';
      const newColor = update('favoriteColor', 'orange');
      expect(newColor).toEqual('orange');
    });
    it('returns the same reference-type value (not a clone!)', () => {
      friendly.someNumbers = [1, 2, 3];
      const newNumbers = [4, 5, 6];
      const returnedNumbers = update('someNumbers', newNumbers);
      const areSameArray = newNumbers === returnedNumbers;
      expect(areSameArray).toEqual(true);
    });
  });

  describe('update stores a copy of values you pass in', () => {
    it('does not store the same array you pass', () => {
      friendly.someNumbers = [1, 2, 3];
      const newNumbers = [4, 5, 6];
      update('someNumbers', newNumbers);
      const areDifferentArrays = friendly.someNumbers !== newNumbers;
      expect(areDifferentArrays).toEqual(true);
    });
    it('does store a deep clone of array you pass', () => {
      friendly.someNumbers = [1, 2, 3];
      const newNumbers = [4, 5, 6];
      update('someNumbers', newNumbers);
      // assert deep equality
      expect(friendly.someNumbers).toEqual(newNumbers);
    });
  });

  describe('update throws an error if new data is not JSON-friendly', () => {
    it('rejects functions', () => {
      friendly.thing = '';
      const savingAFunction = () => update('thing', () => {});
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects undefined', () => {
      friendly.thing = '';
      const savingAFunction = () => update('thing', undefined);
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects DOM elements', () => {
      friendly.thing = '';
      const savingAFunction = () =>
        update('thing', document.createElement('div'));
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects objects containing invalid entries', () => {
      friendly.thing = '';
      const savingAFunction = () =>
        update('thing', {
          a: () => {},
          b: document.createElement('div'),
        });
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects arrays containing invalid entries', () => {
      friendly.thing = '';
      const savingAFunction = () =>
        update('thing', [() => {}, document.createElement('div')]);
      expect(savingAFunction).toThrow(TypeError);
    });
  });
});
