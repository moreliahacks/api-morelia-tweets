'use strict';

var async       = require('async')
,   mongoose    = require('mongoose')
,   wrap        = require('./wrapper');

module.exports = function (_instance, models, connection) {
    var fetch = q.nbind(async.forEachOfSeries, async);

    return fetch(models, function (path, name, next) {
        var _model = wrap(_instance, path, name, connection);

        _instance.insertComponent(
            name, _model, _instance.getComponents().models
        );
        next();
    });
};
