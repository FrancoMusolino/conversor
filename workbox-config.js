module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{js,png}'],
  swDest: 'build/service-worker.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
