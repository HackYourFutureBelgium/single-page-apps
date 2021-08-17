import { friendly } from '../../data/friendly.js';
import { create } from './create.js';

describe('create: creates an entry in the data', () => {
  beforeEach(() => {
    // delete all of the keys in the data before each `it`
    //  this way each unit test starts with the same data
    Object.keys(friendly).forEach((key) => delete friendly[key]);
  });

  it('throws an error if the key already exists', () => {
    friendly.pie = 'apple';
    const createMissingKey = () => create('pie', 'pumpkin');
    expect(createMissingKey).toThrow(ReferenceError);
  });

  describe('creates a new entry with a given key & value', () => {
    it('toads are not frogs', () => {
      // create the new entry
      create('toad', 'not a frog');
      // assert the key's new value
      expect(friendly.toad).toEqual('not a frog');
    });
    it('can write different types to the same key', () => {
      create('isOrange', true);
      expect(friendly.isOrange).toEqual(true);
    });
    it('data should have only 1 key after creating', () => {
      create('password', 'P@s5w0rD');
      const numberOfKeys = Object.keys(friendly).length;
      expect(numberOfKeys).toEqual(1);
    });
  });

  describe('create returns the value you pass in', () => {
    it('returns the same primitive value', () => {
      const newColor = create('favoriteColor', 'orange');
      expect(newColor).toEqual('orange');
    });
    it('returns the same reference-type value (not a clone!)', () => {
      const newNumbers = [4, 5, 6];
      const returnedNumbers = create('someNumbers', newNumbers);
      const areSameArray = newNumbers === returnedNumbers;
      expect(areSameArray).toEqual(true);
    });
  });

  describe('create stores a copy of values you pass in', () => {
    it('does not store the same array you pass', () => {
      const newNumbers = [4, 5, 6];
      create('someNumbers', newNumbers);
      const areDifferentArrays = friendly.someNumbers !== newNumbers;
      expect(areDifferentArrays).toEqual(true);
    });
    it('does store a deep clone of array you pass', () => {
      const newNumbers = [4, 5, 6];
      create('someNumbers', newNumbers);
      // assert deep equality
      expect(friendly.someNumbers).toEqual(newNumbers);
    });
  });

  describe('create throws an error if new data is not JSON-friendly', () => {
    it('rejects functions', () => {
      const savingAFunction = () => create('thing', () => {});
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects undefined', () => {
      const savingAFunction = () => create('thing', undefined);
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects DOM elements', () => {
      const savingAFunction = () =>
        create('thing', document.createElement('div'));
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects objects containing invalid entries', () => {
      const savingAFunction = () =>
        create('thing', {
          a: () => {},
          b: document.createElement('div'),
        });
      expect(savingAFunction).toThrow(TypeError);
    });
    it('rejects arrays containing invalid entries', () => {
      const savingAFunction = () =>
        create('thing', [() => {}, document.createElement('div')]);
      expect(savingAFunction).toThrow(TypeError);
    });
  });
});
