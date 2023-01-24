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
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@contexts': './src/contexts',
          '@functions': './src/functions',
          '@features': './src/features',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@utils': './src/utils'
        },
      },
    ],
  ],
};
