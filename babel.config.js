module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json'
          ],
          alias: {
            '@styles': './styles',
            '@hooks': './hooks',
            '@assets': './assets',
            '@constants': './constants',
            '@screens': './screens',
            '@contexts': './contexts',
            '@components': './components',
            '@service': './service',
            '@lib': './lib',
            '@navigation': './navigation'
          }
        }
      ]
    ]
  };
};
