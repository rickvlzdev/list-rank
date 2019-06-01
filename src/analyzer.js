function analyzer(searchString, stringsToAnalyze) {
  if (!((typeof searchString === "string") &&
    Array.isArray(stringsToAnalyze) &&
    stringsToAnalyze.every(str => (typeof str === "string")))) {
      throw new TypeError('arguments must be string and string array');
  }
  const results = stringsToAnalyze.map((str)=> {
    // make search case insensitive
    const strLowerCase = str.toLowerCase();
    const searchStringLowerCase = searchString.toLowerCase();
    // find index of case-insensitive match in subject string
    return {
      subject: str,
      position: strLowerCase.indexOf(searchStringLowerCase),
    };
  });
  return results;
}

module.exports = analyzer;
