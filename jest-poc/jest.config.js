module.exports = {
  verbose: true,
  reporters: [
    'default', ['jest-html-reporters', {
      publicPath: './reports',
      filename: 'report.html',
    }],
  ],
};
