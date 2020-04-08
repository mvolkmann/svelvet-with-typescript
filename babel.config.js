module.exports = {
  plugins: [
    // You can override the Babel config, but
    // you must have this plugin defined when using Snowpack.
    [
      'snowpack/assets/babel-plugin.js',
      {
        // Remove the need to append .js to imports.
        optionalExtensions: true,

        // This is a generated file that maps module names
        // to their relative file paths under dist/web_modules.
        importMap: '../dist/web_modules/import-map.json',
      },
    ],

    // This adds the ability to import .json files.
    ['inline-json-import', {}],
  ],
};
