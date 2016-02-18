'use strict';

var mongoose = require('mongoose');

module.exports = function (_instance, path, name, connection) {
    var Model = require(path);

    var model = connection.model(
        name,
        new Model(
            _instance.getComponents(), mongoose.Schema, connection
        )
    );

    return function () {
        return model;
    };
};
