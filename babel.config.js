module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '~': './src',
          '@elements': './src/components/elements',
          '@forms': './src/components/forms',
          '@fragments': './src/components/fragments',
          '@layouts': './src/components/layouts',
        },
      },
    ],
  ],
};
