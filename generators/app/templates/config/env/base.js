export default {
  devServer: {
    domain: 'localhost',
    port: 8000,
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: true,
      version: true,
      cached: false,
      cachedAssets: false,
      reasons: false,
      source: false,
      errorDetails: true
    }
  }
};
