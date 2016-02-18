'use strict';

module.exports = function(source, destination) {
    var ncp     = require('ncp').ncp
    ,   defer   = q.defer();

    ncp(source, destination, function (err) {
        if(err) return defer.reject(err);
        defer.resolve();
    });

    return defer.promise;
};
