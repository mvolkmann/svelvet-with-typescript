const autoPreprocess = require('svelte-preprocess');

module.exports = [
  autoPreprocess({
    typescript: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        baseUrl: './src',
        module: 'es2020',
        resolveJsonModule: true,
        target: 'es2020',
      },
    },
  }),
];
