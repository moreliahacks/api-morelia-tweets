'use strict';

var reader = require('./reader');

module.exports = function () {
    return reader('templates/confguration.json');
};
