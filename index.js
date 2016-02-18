'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('mx.moreliatuits', ['booljs-mongoose'])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
    .run()
    .catch(function(error){
        console.log(error);
    });
