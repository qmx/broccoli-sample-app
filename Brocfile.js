var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var concat = require('broccoli-concat');
var uglifyJS = require('broccoli-uglify-js');
var assetRev = require('broccoli-asset-rev');
var env = require('broccoli-env').getEnv();

var deps = pickFiles('bower_components', {
    srcDir: '/',
    destDir: '/deps'
});

var concatenatedDeps = concat(deps, {
    inputFiles: [
        'deps/jquery/dist/jquery.js',
        'deps/lodash/dist/lodash.js'
    ],
    outputFile: '/assets/deps.js'
});

concatenatedDeps = uglifyJS(concatenatedDeps);

var tree = mergeTrees([concatenatedDeps, 'app', 'public']);

if (env === 'production') {
    tree = assetRev(tree);
}

module.exports = tree;
