'use strict';

/**
 * Adds commas to a number
 * @param {string} searchString
 * @param {string array} stringsToSearch
 * @return {string array}
 */

const analyzer = require('./src/analyzer');
const sorter = require('./src/sorter');

module.exports = (searchString, stringsToSearch) => {
  return sorter(analyzer(searchString, stringsToSearch));
};
