'use strict';

module.exports = function (dir) {
    var fs      = require('fs')
    ,   _dir    = dir || '.';

    return q.nbind(fs.mkdir, fs)(_dir).then(function () {
        return q.resolve();
    }, function () {
        return q.resolve();
    }).then(function () {
        try {
            process.chdir(_dir);
            q.resolve();
        } catch(err) {
            q.reject(err);
        }
    });
};
