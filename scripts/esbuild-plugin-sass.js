const { render } = require('node-sass') // eslint-disable-line @typescript-eslint/no-var-requires

const sassPlugin = (options) => ({
  name: "esbuild-plugin-sass",
  setup(build) {
    build.onLoad({ filter: /\.s?css$/ }, ({ path }) => {
      return new Promise((resolve) => {
        render({ ...options, file: path }, (err, result) => {
          resolve({
            contents: result?.css,
            loader: "css",
            errors: err ? [{ text: err.message }] : undefined,
          });
        });
      });
    });
  },
});
module.exports = sassPlugin;