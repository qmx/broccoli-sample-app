var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var deps = pickFiles('bower_components', {
    srcDir: '/',
    destDir: '/deps'
});

var tree = mergeTrees([deps, 'app', 'public']);
module.exports = tree;
