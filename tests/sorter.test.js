const sorter = require('../src/sorter.js');
const data = require('./sorter_data');

describe('Test sorter function', () => {
  test('Throws error if argument is not an array of objects that have form { subject: (string), position: (number) }', () => {
    expect(() => {
      sorter(['first', 'second', 'third']);
    }).toThrow(new TypeError('argument must be an array of objects with form { subject: (string), position: (number) }'));
  });
  test('Returns an array of strings' , () => {
    const results = sorter(data.input);
    expect(Array.isArray(results)).toBe(true);
    expect(results.every(result => (typeof result === 'string'))).toBe(true);
  });
  test('Sorts subject fields by position from least to greatest', () => {
    const results = sorter(data.input);
    expect(results).toEqual(data.output);
  });
  test('Returns an array of objects with subject string and match position if showAll (second) argument is true', () => {
    const results = sorter(data.input, true);
    expect(results.every((result) => {
      const hasSubjectStringProp = typeof result.subject === 'string';
      const hasPositionNumberProp = typeof result.position === 'number';
      return hasSubjectStringProp && hasPositionNumberProp;
    })).toBe(true);
  });
  test('Returns array ordered by position property, starting with the smallest index', () => {
    const results = sorter(data.input, true);
    expect(results).toEqual(data.completeOutput);
  });
});
