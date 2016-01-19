var minify = require('html-minifier').minify;

module.exports = function(Plugin, options) {
  Plugin.event.collection.beforeWrite(function(file, fileContent) {
    // Check if individual File disables or changes options of this plugin.
    var filePluginConfig = file.data && file.data.plugins &&
        file.data.plugins['html-minifier'] ?
        file.data.plugins['html-minifier'] : {};

    if (filePluginConfig.enabled === false) {
      return;
    }

    return [file, minify(fileContent, Plugin.merge({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }, options, filePluginConfig.options))];
  });
};
