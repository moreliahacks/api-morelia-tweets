'use strict';

module.exports = function (options) {

    var Npm = require('npm'), npm, install;

    return q.nbind(Npm.load, Npm)().then(function (_npm) {
        npm = _npm;
        return q.nbind(npm.commands.init, npm.commands)();
    }).then(function () {
        log.info('Downloading dependencies...\n');
        install = q.nbind(npm.commands.install, npm.commands);
        return install(['bool.js']);
    }).then(function () {
        var drivers = [];
        if(options.server_driver) drivers.push(options.server_driver);
        if(options.database_driver) drivers.push(options.database_driver);
        if(drivers.length > 0){
            return install(drivers);
        }
    });
};
