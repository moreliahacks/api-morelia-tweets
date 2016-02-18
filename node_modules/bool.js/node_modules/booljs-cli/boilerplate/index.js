'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('{{namespace}}'{{{dependencies}}})
    .setServerLoader('{{options.server_driver}}')
    .setDatabaseLoader('{{options.database_driver}}')
    .run();
