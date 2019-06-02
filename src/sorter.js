const sorter = (analyzedStrings, showAll = false) => {
  if (!(Array.isArray(analyzedStrings) &&
    analyzedStrings.every((str) => {
      return (typeof str.subject === 'string') && (typeof str.position === 'number');
    })
  )) {
    throw new TypeError('argument must be an array of objects with form { subject: (string), position: (number) }');
  }
  // remove all objects with postion property equal to -1
  const matchedStrings = analyzedStrings.filter(str => str.position >= 0);
  // objects by position property from least to greatest
  const orderedStrings = matchedStrings.sort((str1, str2) => str1.position - str2.position);
  // get the subject property strings in order
  const stringSubjects = showAll ? orderedStrings : orderedStrings.map(str => str.subject);
  return stringSubjects;
};

module.exports = sorter;
