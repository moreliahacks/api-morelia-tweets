'use strict';

var mongoose    = require('mongoose')
,   url         = require('url');

module.exports = function (dbconfig) {
    dbconfig = dbconfig[process.env.NODE_ENV || 'development'];

    var defer       = q.defer()
    ,   uriConf     = {
        protocol: 'mongodb',
        slashes: true,
        hostname: dbconfig.host,
        pathname: dbconfig.database
    };

    if(dbconfig.port){
        uriConf.port = dbconfig.port;
    }

    var connection = mongoose.createConnection(
        url.format(uriConf),
        _.omit(dbconfig, ['host', 'port', 'database'])
    );

    connection.on('connected', function () {
        defer.resolve(connection);
    });
    connection.on('error', function (err) {
        defer.reject(err);
    });

    return defer.promise;
};
