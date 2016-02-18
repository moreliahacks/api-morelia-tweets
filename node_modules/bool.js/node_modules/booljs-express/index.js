'use strict';

var API;
try {
    API = require('bool.js/api');
} catch (err){
    API = require('booljs-api');
}
var resolver    = require('./lib/utils/resolve');

module.exports = new API.ServerLoader(
    'booljs-express', // Name
    require('./lib/server'), // Functions
    [ resolver('lib/middleware/cors') ] // Dependants
);
