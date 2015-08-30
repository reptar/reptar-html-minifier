var minify = require('html-minifier').minify;

module.exports = function(Plugin, options) {
  Plugin.event.collection.beforeWrite(function(fileContents) {
    fileContents.content = minify(fileContents.content, Plugin.merge({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }, options));
  });
};
