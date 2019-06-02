'use strict';

/**
 * Adds commas to a number
 * @param {string} searchString
 * @param {string array} stringsToSearch
 * @param {boolean} showAll (default is true)
 * if showAll is false
 * @return {string array}
 * else
 * @return {{subject: string, position: number} array}
 */

const analyzer = require('./src/analyzer');
const sorter = require('./src/sorter');

module.exports = (searchString, stringsToSearch, showAll = false) => {
  return sorter(analyzer(searchString, stringsToSearch), showAll);
};
