
require('babel-register'); // It transpiles before running our tests

// Disable webpack features that mocha doesn't understand e.g CSS extension
require.extensions['.css'] = function() {};
