'use strict';

var path    = require('path')
,   fs      = require('fs');

module.exports = function (filepath) {
    return fs.readFileSync(path.join(
        require.resolve('..'), '..', filepath
    ));
};
