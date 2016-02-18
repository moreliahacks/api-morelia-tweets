'use strict';

module.exports = function (namespace, dir, options) {

    return require('./mkdir')(dir).then(function () {
        log.info('Initiating project...\n');
        return require('./npm')(options);
    }).then(function () {
        log.info('Downloading boilerplate...\n');
        return require('./boilerplate')();
    }).then(function () {
        return require('./configure')(namespace, options);
    }).catch(function (err) {
        log.error(err);
        throw err;
    });

};
