const {output: input} = require('./analyzer_data');

const output = [
  'Old folks have many stories to tell.',
  'He told her to run away.',
  'What a bold speaker!',
  'Oragami: The art of folding paper.',
];

const completeOutput = [
  {
    subject: 'Old folks have many stories to tell.',
    position: 0,
  },
  {
    subject: 'He told her to run away.',
    position: 4,
  },
  {
    subject: 'What a bold speaker!',
    position: 8,
  },
  {
    subject: 'Oragami: The art of folding paper.',
    position: 21,
  }
];

module.exports = {
  input,
  output,
  completeOutput,
};
