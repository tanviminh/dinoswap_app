module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
    // [
    //   'module-resolver',
    //   {
    //     root: ['./src'],
    //     extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
    //   },
    // ],
  ],
};
