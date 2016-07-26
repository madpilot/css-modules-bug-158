var fs = require('fs');

var postCSS = require('postcss');
var cssModules = require('postcss-modules');

var processor = postCSS([
  cssModules({
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  })
]);

processor
  .process(fs.readFileSync("input.css"), { from: "input.css", to: "output.css" })
  .then(function(result) {
    fs.writeFileSync("output.css", result.css)
  }).catch(function(error) {
    throw error;
  });
