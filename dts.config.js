const alias = require('@rollup/plugin-alias');

/**
 * @type {import('dts-cli').DtsConfig}
 */
module.exports = {
  rollup(config) {
    // Replace "@/" with "src/" as the root directory
    config.plugins.push({
      plugins: [
        alias({
          entries: [{ find: /@\//, replacement: /src\// }],
        }),
      ],
    });
    // Do not treat absolute paths as external modules
    return {
      ...config,
      external: (id) => !id.startsWith('@') && config.external(id),
    };
  },
};
