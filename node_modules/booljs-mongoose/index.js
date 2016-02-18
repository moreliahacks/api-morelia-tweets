'use strict';

var API = require('bool.js/api');

module.exports = new API.DatabaseLoader(
    'booljs-mongoose', // Name
    require('./lib') // Functions
);
