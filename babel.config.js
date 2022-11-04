module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@navigation': './src/navigation',
          '@api': './src/api',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
