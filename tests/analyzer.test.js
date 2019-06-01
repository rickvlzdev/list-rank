const analyzer = require('../src/analyzer');
const data = require('./analyzer_data');

describe('Test the analysis of an array of strings', () => {
  const searchString = data.input.searchString;
  const stringsToSearch = data.input.stringsToSearch;
  test('Throws error if inputs are not a string and an string array (in that order)', () => {
    expect(() => {
      analyzer(10, ['h3', 5]);
    }).toThrow(new TypeError('arguments must be string and string array'));
  }); 
  test('Returns an array of objects that have the form {subject: (string), position: (number)}', () => {
    const results = analyzer(searchString, stringsToSearch);
    expect(Array.isArray(results)).toBe(true);
    expect(results[0]).toHaveProperty('subject');
    expect(results[0]).toHaveProperty('position');
    expect(typeof results[0].subject).toBe('string');
    expect(typeof results[0].position).toBe('number');
  });
  test('Accepts data.input.searchString and data.input.stringsToSearch and returns data.ouput', () => {
    const results = analyzer(data.input.searchString, data.input.stringsToSearch);
    expect(results).toEqual(data.output);
  });
});
