# List Rank

A small library that orders a list of strings based on how early the query string appears in a string.

## Installation

  `npm install @rveloz/list-rank`

## Usage

```
const listRank = require("@rveloz/list-rank");

const query = "fun";

const list = [
  "Goodbye",
  "Fundamental",
  "I'm from Chicago",
  "He's pretty funny",
  "A fundraiser for church",
];

const orderedList = listRank(query, list);

```

Output should be:

```
[
  "Fundamental",
  "A fundraiser for church",
  "He's pretty funny",
]
```

## Tests

  `npm test`
