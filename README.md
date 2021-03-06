[![Build Status](https://travis-ci.com/rickvlzdev/list-rank.svg?branch=master)](https://travis-ci.com/rickvlzdev/list-rank)
[![Coverage Status](https://coveralls.io/repos/github/rickvlzdev/list-rank/badge.svg)](https://coveralls.io/github/rickvlzdev/list-rank)

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

If the last argument is true:

```
  const orderedList = listRank(query, list, true);
```

Output should be:

```
[
  {
    subject: "Fundamental",
    position: 0,
  },
  {
    subject: "A fundraiser for church",
    position: 2,
  },
  {
    subject: "He's pretty funny",
    position: 12,
  },
];
```

## Tests

  `npm test`
