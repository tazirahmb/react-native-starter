module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      { rootPathPrefix: '~', rootPathSuffix: 'src' },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@elements': './components/elements',
          '@forms': './components/forms',
          '@fragments': './components/fragments',
          '@layouts': './components/layouts',
        },
      },
    ],
  ],
};
