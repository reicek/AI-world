const path = require('path');

module.exports = {
  entry: './src/js/simulation.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
};
