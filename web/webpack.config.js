module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(?:le|c)ss$/,
        exclude: /node_modules/,
        use: [{
          loader: require.resolve('less-loader'),
          options: {
            importLoaders: 1,
          },
        }]
      },
    ]
  }
};
