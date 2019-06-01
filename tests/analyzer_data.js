const input = {
  searchString: 'Old',
  stringsToSearch: [
    'He told her to run away.',
    'Old folks have many stories to tell.',
    'When I visited Paris.',
    'What a bold speaker!',
    'Kyoto is one of the most beautiful cities in the world!',
    'Remember to speak loudly.',
    'Oragami: The art of folding paper.',
  ],
};

const output = [
  {
    subject: 'He told her to run away.',
    position: 4,
  },
  {
    subject: 'Old folks have many stories to tell.',
    position: 0,
  },
  {
    subject: 'When I visited Paris.',
    position: -1,
  },
  {
    subject: 'What a bold speaker!',
    position: 8,
  },
  {
    subject: 'Kyoto is one of the most beautiful cities in the world!',
    position: -1,
  },
  {
    subject: 'Remember to speak loudly.',
    position: -1,
  },
  {
    subject: 'Oragami: The art of folding paper.',
    position: 21,
  },
];

module.exports = {
  input,
  output,
};
