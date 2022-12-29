module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@context': './src/context',
          '@screens': './src/screens',
          '@components': './src/components',
          '@theme': './src/theme',
          '@theme': './src/theme',
          '@utils': './src/utils'
        },
      },
    ],
  ],
};
