const path = require('path');

module.exports = {
  entry: './src/index.js', // замените на путь к вашему входному файлу
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "net": false,
      "dns": false
    }
  }
};
