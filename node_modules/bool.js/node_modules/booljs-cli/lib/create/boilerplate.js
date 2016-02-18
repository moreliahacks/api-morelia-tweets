'use strict';

module.exports = function () {
    var copy        = require('../utils/copy')
    ,   path        = require('path')
    ,   location    = path.join(require.resolve('../..'), '../boilerplate')
    ,   destination = path.join(process.cwd(), '.');

    return copy(location, destination);
};
